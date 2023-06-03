import { Button } from 'react-bootstrap';
import './CheckOutForm.css';
import { useState } from 'react';

const CheckOutForm = ({onConfirm}) => {
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');


    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData = {name, phone, email}

        onConfirm(userData);
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input className='Input' type='text' value={name} onChange={({target}) => setName(target.value)}></input>
                </label>
                <label className='Label'>
                    Número telefonico
                    <input className='Input' type='text' value={phone} onChange={({target}) => setPhone(target.value)}></input>
                </label>
                <label className='Label'>
                    Email
                    <input className='Input' type='text' value={email} onChange={({target}) => setEmail(target.value)}></input>
                </label>
                <div className='Label'>
                    <Button variant="outline-light" type='submit' className='Button'>Crear Orden</Button>
                </div>
            </form>
        </div>

    )
}

export default CheckOutForm;