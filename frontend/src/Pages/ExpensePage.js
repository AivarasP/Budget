import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import authHeader from "../services/auth-header";
function ExpensePage() {
  const [expense, setExpense] = useState([]);
  const loadExpense = () => {
    axios.get("http://localhost:8080/api/expenses", { headers: authHeader() }).then((res) => {
      
      setExpense(res.data.reverse());
    });
  }

  useEffect(() => {
    loadExpense();
  }, [expense]);

  function DeleteExpense(id) {
    Swal.fire({
      title: 'Ar tikrai norite ištrinti?',
      text: "Sugražinti nebus galima.",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: "Ne, atšaukti!",
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Taip, ištrinti!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/api/expenses/${id}`,{ headers: authHeader() }).then(loadExpense())
        Swal.fire(
          'Išlaidos ištrintos!',
          '',
          'success'
        )
      }
    })
  }
  return ( 
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-black text-3xl font-medium font-Montserrat">
          Išlaidos
        </h1>
        <table className="w-[80%] text-center overflow-hidden overflow-y-scroll mt-8 border border-black">
          <thead className="border-b bg-gray-800">
            <tr>
              
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Data
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Paskirtis
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Išleidų suma
              </th>
              <th
                scope="col"
                className="text-lg font-medium text-white px-6 py-4"
              >
                Veiksmai
              </th>
            </tr>
          </thead>
          <tbody>
            {expense.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.comment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-light text-gray-900">
                  {data.sum}
                </td>
                <td className="flex justify-center items-center space-x-4 mt-1">
                  <Link to={`/edit-expense/${data.id}`} className="px-6 py-2 text-white font-normal bg-blue-600 rounded-lg">
                    Redaguoti
                  </Link>
                  <button
                    onClick={() => DeleteExpense(data.id)}
                    className="px-6 py-2 text-white font-normal bg-red-600 rounded-lg"
                  >
                    Ištrinti
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpensePage;
