import React from "react";
import { useState } from "react";
import "./form.css";
import axios from "axios";



export const Forms = () => {
  const [fname,setName] = useState('');
  const [amount,setAmount] = useState('');
  const [type,setType] = useState('');
  const [render,setRender] = useState('');

  const submitForm = () =>{
    if(render === 'Expense'){
      axios.post('http://localhost:5000/api/insert',{
      fname: fname,
      amount: amount,
      type: type}).then(()=>{
        alert('Insert Successful');
      })
    }
    else if(render === 'Income'){
      axios.post('http://localhost:5000/api/insertInc',{
        fname: fname,
        amount: amount,
        type: type}).then(()=>{
          alert('Insert Successful');
        })
    }
    else{
      axios.post('http://localhost:5000/api/insertSav',{
      fname: fname,
      amount: amount,
      }).then(()=>{
        alert('Insert Successful');
      })
    }
  }


    return(
      <>
      <form>
        <p>BUDGETER</p>
          <select onChange={(e)=>{
              setName(e.target.value);
          }}>
            <option value="" disabled selected>Name</option>
            <option value="1">Vikrant</option>
            <option value="2">Ramesh</option>
            <option value="3">Harsha</option>
            <option value="4">Sulochana</option>
            <option value="5">Kanishkaa</option>
          </select>
        
          <select onChange={(e)=>{
                  setRender(e.target.value);
          }}>
            <option value="" disabled selected>Income/Expense</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>

        {
          (render === 'Expense' ||render === '')
          ? (
            <>
                <input type="amount" placeholder="Expenditure Amount" onChange={(e)=>{
                  setAmount(e.target.value);
              }}/><br/>

            <select onChange={(e)=>{
                  setType(e.target.value);
              }}>
                <option value="" disabled selected>Type of Expense</option>
                <option value="Grocery">Grocery</option>
                <option value="Transport">Transport/Fuel</option>
                <option value="Bills">Bills</option>
                <option value="Medical">Medical</option>
                <option value="Communications">Communications</option>
                <option value="Repairs">Repairs</option>
                <option value="Clothing">Clothing</option>
                <option value="Food">Food</option>
                <option value="Miscellaneous">Miscellaneous</option>

              </select>
            <input type="button" value="ADD" onClick={submitForm}/><br/>
            </>
          )
          : (render === 'Income') ?(
                    <>
                      <input type="amount" placeholder="Income Amount" onChange={(e)=>{
                        setAmount(e.target.value);
                      }}/><br/>

                      <select onChange={(e)=>{
                        setType(e.target.value);
                      }}>
                        <option value="" disabled selected>Type of Income</option>
                        <option value="Salary">Salary</option>
                        <option value="Bonus">Bonus</option>
                        <option value="Micellaneous">Micellaneous</option>


                      </select>
                  <input type="button" value="ADD" onClick={submitForm}/><br/>
                  </>
          ) : (
                    <>
                      <input type="amount" placeholder="Savings Amount" onChange={(e)=>{
                        setAmount(e.target.value);
                      }}/><br/>

                  <input type="button" value="ADD" onClick={submitForm}/><br/>
                  </>
          )
        } 
        
      </form>
    
      <div class="drops">
        <div class="drop drop-1"></div>
        <div class="drop drop-2"></div>
        <div class="drop drop-3"></div>
        <div class="drop drop-4"></div>
        <div class="drop drop-5"></div>
      </div>
    </>
    );
}
