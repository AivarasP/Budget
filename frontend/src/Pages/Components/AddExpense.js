import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddExpense() {
    const [date, SetDate] = useState("");
    const [comment, SetComment] = useState("");
    const [sum, SetSum] = useState("");
    const [income, setIncome] = useState([]);

      const loadIncome = () => {
        axios.get("http://localhost:8080/api/incomes", { headers: authHeader() }).then((res) => {
          setIncome(res.data.reverse());
        });
      };
    
      useEffect(() => {
        loadIncome();
      }, [income]);

     const balansas = income.reduce(function( _this,val ) {
       return _this + Number(val.sum)
     }, 0);

    const navigate = useNavigate();

    const data = {
        date: date,
        comment: comment,
        sum: sum
    }

    function Submit(e) {
        e.preventDefault();
        if(!date || !comment || !sum || sum <= 0 ){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Laukeliai neatitinka formato'
                
              })
        }  else if (sum > balansas){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Išlaidos negali būti didesnės nei Balansas'
                
              })
        }
        else{
            Swal.fire(
                'Išlaidos pridėtos!',
                '',
                'success',
                axios.post('http://localhost:8080/api/expenses' ,data,{ headers: authHeader() }).then(
                navigate('/home')
                )
              )
    }
    
    }
    return (

        
        <div className='w-screen h-full flex flex-col justify-center items-center mt-16'>
            <h1 className='text-black text-3xl font-semibold font-Montserrat'>Pridėti Išlaidas</h1>
            <form className='w-[80%] h-full flex flex-col justify-center items-center mt-4'>

                <input value={date} onChange={(e) => SetDate(e.target.value)} type="date" className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' />
                <input value={comment} onChange={(e) => SetComment(e.target.value)} type="text" placeholder='Paskirtis' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' required/>
                <input value={sum} onChange={(e) => SetSum(e.target.value)} type="number" placeholder='Išleidimo suma' className='w-[80%] bg-white/10 mt-4 text-xl font-Montserrat font-normal outline-none py-4 pl-6 border border-zinc-400' required />
                <button onClick={Submit} className='w-[80%] bg-blue-600 mt-4 text-xl text-white font-Montserrat font-semibold py-4 pl-6 rounded-lg'>Išsaugoti</button>
            </form>

        </div>
    )
}

export default AddExpense