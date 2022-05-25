import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import authHeader from '../../services/auth-header';

function EditIncome() {
    const [date, SetDate] = useState("");
    const [comment, SetComment] = useState("");
    const [sum, SetSum] = useState("");

    const navigate = useNavigate();


    useEffect(()=>{
        axios.get(`http://localhost:8080/api/incomes/${id}`,{ headers: authHeader() }).then((res)=>{
            SetDate(res.data.date)
            SetComment(res.data.pavadinimas)
            SetSum(res.data.suma)

        })
    },[])

    const data ={
        date:date,
        comment:comment,
        sum:sum,
    }

    const{id} = useParams();
    
    function Update(e){
        e.preventDefault();
        if(!date || !comment || !sum || sum <= 0){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Laukeliai neatitinka formato'
                
              })
        }  else { 
            Swal.fire({
                title: 'Ar tikrai norite išsaugoti pakeitimus?',
                showDenyButton: true,
                confirmButtonText: 'Išsaugoti',
                denyButtonText: `Neišsaugoti`,
              }).then((result) => {
                if (result.isConfirmed) {
                axios.put(`http://localhost:8080/api/incomes/${id}`,data,{ headers: authHeader() }).then(navigate("/home"))
                  Swal.fire('Išsaugota!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Pakeitimai nebuvo išsaugoti', '', 'info')
                }
              })
    
        
    }
       
    }

    

  return (
    <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Redaguoti Pajamas</h1>
            <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>

            
                <input value={date} onChange={(e) => SetDate(e.target.value)} type="date" required className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={comment} onChange={(e) => SetComment(e.target.value)} type="text" required placeholder='Pajamų šaltinis' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={sum} onChange={(e) => SetSum(e.target.value)} type="number" required placeholder='Suma' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <button onClick={Update} className='w-[80%] bg-blue-600 mt-4 text-xl text-white font-Montserrat font-semibold py-4 pl-6 rounded-lg'>Išsaugoti</button>
            </form>

        </div>
  )
}

export default EditIncome