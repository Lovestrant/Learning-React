import React from 'react'
import './app.css'


export default function Todolist() {

  
    return (
        
        <>
        <div class = "div1">
        <p>           
            <label id = "label1">File</label>
            <label id = "label2"> Help </label>
          
             <button id = "btn1">Log Out</button> <label>login name and time here </label>
           <strong><label id = "label3"> Duka Yetu</label></strong> 
        </p>

        </div>
        <div class = "div2">
            <p>Sale # <input type = "text" id = "input" placeholder = "576"/> Date <input type = "date"/></p>
         <p> 
             Customer Name <input type = "text" id="input1" placeholder = "CASH"/> <strong><button id = "btn2">New Customer</button></strong>
             <label id = "label4">KES label</label>
         </p>
         <p>Price Source  <input type= "radio" class = "Retailprice" name="RetailPrice" value ="RetailPrice"/> <label id = "label12">Retail Price</label>

         
         <input type = "radio" class = "Wholesaleprice" name = "Wholesaleprice" value = "wholesale"/><label id= "label13">Whole sale</label>
        <input id = "input2" type= "text" placeholder = "0"/>
        <input id = "input3"  type= "text" placeholder = "10023"/>


        </p>
        <p>
            <label>Product Name</label>
            <label id = "label5">unit</label>
            <label id = "label6">selling Price</label>
            <label id = "label7">Quantity</label>
            <label id = "label8">Total</label>
        
        </p>
        <p>
            <input id = "input4" type = "text"/>
            <input id = "input5" type = "text"/>
            <input id = "input6" type = "number"/>
            <input id = "input7" type = "number"/>
            <input id = "input8" type = "number"/>
            <button id = "btn3">Add to list</button>
        </p>

        </div>
        <div class = "tablediv"> 
        <table>
        <tr>
            <th id = "th1">Product Name</th>
            <th id = "th2">Unit</th>
            <th id = "th3">Quantity</th>
            <th id = "th4">Unit price</th>
            <th id = "th5">Total</th>
            <th id = "thfinal"></th>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        
        
        </table>



        </div>
        <div class = "div3"> 
        <p><button id = "btn4">Remove Row</button></p>
        <p>
            <label id= "label9">Cash given</label>
            <label id = "label10">M pesa</label>
            <label id = "label11">Change</label>
        </p>
        <p>
            <input id= "input9" type = "number"/>
            <input id= "input10" type = "number"/>
            <input id= "input11" type = "number"/>
            <button id= "btn5">Save sale</button>
            <button id= "btn6">Hold sale</button>
            <button id= "btn7">View Held Sales</button>
            <button id= "btn8">View sales</button>
            <button id= "btn9">Cancel</button>
        </p>

        </div>
     </>
    )
}
