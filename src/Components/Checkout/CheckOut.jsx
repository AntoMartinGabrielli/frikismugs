import {getDocs, documentId, collection, query, where, Timestamp, writeBatch, addDoc } from 'firebase/firestore';
import {db} from '../../Firebase/firebaseConfig';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';

const CheckOut = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                comprador: {name, phone, email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(tazas => tazas.id)

            const tazasRef = collection(db, 'tazas')

            const tazasAddedFromFirestore = await getDocs(query(tazasRef, where(documentId(),'in',ids)))

            const {docs} = tazasAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const tazasAddedToCart = cart.find(tazas => tazas.id === doc.id)
                const tazasCantidad = tazasAddedToCart?.cantidad

                if (stockDb >= tazasCantidad) {
                    batch.update(doc.ref,{stock:stockDb- tazasCantidad})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db,'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error ('Disculpa, nos hemos quedado sin stock de algunos productos.')
            }
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return 
        <h1>Su orden esta siendo generada, espere un momento.</h1>
    }
    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckOutForm onConfirm={createOrder}/>
        </div>
    )
}

export default CheckOut;