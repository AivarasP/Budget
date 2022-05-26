import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import authHeader from "../../services/auth-header";

function AddExpense() {
    const [date, SetDate] = useState("");
    const [comment, SetComment] = useState("");
    const [sum, SetSum] = useState("");
    
    const navigate = useNavigate();

    const data = {
        date: date,
        comment: comment,
        sum: sum
    }

    function Submit(e) {
        e.preventDefault();
        if(!date || !comment || !sum || sum <= 0){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Laukeliai neatitinka formato'
                
              })
        }  
        else {
            Swal.fire(
                'Išlaidos Pridėtos!',
                '',
                'success',
                axios.post('http://localhost:8080/api/expenses', data, { headers: authHeader() }).then(
                navigate('/home')
                )
              )
    }
    }
    return (

        
        <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Pridėti išlaidas</h1>
            <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>

                <input value={date} onChange={(e) => SetDate(e.target.value)} type="date" className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={comment} onChange={(e) => SetComment(e.target.value)} type="text" placeholder='Išlaidų paskirtis' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' required/>
                <input value={sum} onChange={(e) => SetSum(e.target.value)} type="number" placeholder='Suma' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' required />
                <button onClick={Submit} className='w-[80%] bg-blue-600 mt-4 text-xl text-white font-Montserrat font-semibold py-4 pl-6 rounded-lg'>Išsaugoti</button>
            </form>

        </div>
    )
}

export default AddExpense