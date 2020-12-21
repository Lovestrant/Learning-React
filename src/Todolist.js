import React from 'react'
import './app.css'


export default function Todolist() {

  
    return (
        
        <>
        <div>
        <p>           
            File
             Help 
             <button>Log Out</button>    
             Duka Yetu
        </p>

        </div>
        <div>
            <p>Sale # <input type = "text" id = "input"/> Date <input type = "date"/></p>
         <p> 
             Customer Name <input type = "text" placeholder = "CASH"/> <button>New Customer</button>
             <label>KES label</label>
         </p>
         <p>Price Source  <input type= "radio" name="RetailPrice" value ="RetailPrice"/>Retail Price
         <input type = "radio" name = "Wholesale price" value = "wholesale"/>Whole sale
        <input type= "text"/>
        <input type= "text"/>


        </p>
        <p>
            <label>Product Name</label>
            <label>unit</label>
            <label>selling Price</label>
            <label>Quantity</label>
            <label>Total</label>
        
        </p>
        <p>
            <input type = "text"/>
            <input type = "text"/>
            <input type = "number"/>
            <input type = "number"/>
            <input type = "number"/>
            <button>Add to list</button>
        </p>

        </div>
        <div> 
        <table>
        <tr>
            <th>Product Name</th>
            <th>Unit</th>
            <th>Quantity</th>
            <th>Unit price</th>
            <th>Total</th>
            <th></th>
        </tr>
        <tr>
            <td>Dola ngano 2kg</td>
            <td>pkt</td>
            <td>1.0</td>
            <td>125.0</td>
            <td>125.0</td>
            <td></td>
        </tr>
        <tr>
            <td>Dola ngano 2kg</td>
            <td>pkt</td>
            <td>1.0</td>
            <td>125.0</td>
            <td>125.0</td>
            <td></td>
        </tr>
        <tr>
            <td>Dola ngano 2kg</td>
            <td>pkt</td>
            <td>1.0</td>
            <td>125.0</td>
            <td>125.0</td>
            <td></td>
        </tr>
        <tr>
            <td>Dola ngano 2kg</td>
            <td>pkt</td>
            <td>1.0</td>
            <td>125.0</td>
            <td>125.0</td>
            <td></td>
        </tr>
        <tr>
            <td>Dola ngano 2kg</td>
            <td>pkt</td>
            <td>1.0</td>
            <td>125.0</td>
            <td>125.0</td>
            <td></td>
        </tr>
        
        
        </table>



        </div>
        <div> 
        <p><button>Remove Row</button></p>
        <p>
            <label>Cash given</label>
            <label>M pesa</label>
            <label>Change</label>
        </p>
        <p>
            <input type = "number"/>
            <input type = "number"/>
            <input type = "number"/>
            <button>Save sale</button>
            <button>Hold sale</button>
            <button>View Held Sales</button>
            <button>View sales</button>
            <button>Cancel</button>
        </p>

        </div>
     </>
    )
}
