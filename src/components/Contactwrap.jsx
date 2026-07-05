import {React, useState} from 'react'

const Contactwrap = () => {
    const [Data,setData]=useState({name:"",email:"",phoneno:""})
    
    function changeHandler(event){
        const{name,value}= event.target;
         setData(preData=>{
           return{
             ...preData,
             [name]:value
           }
         })
       }

    function submitHandler(event){
        event.preventDefault();
        console.log("finally printing all data ....");
        console.log(Data);
        
        
      }
  return (
    <div>
        <h1>Get In Touch</h1>

        <form action="" onSubmit={submitHandler}>
        <input type="text" 
        placeholder='John' 
        name='name' 
        onChange={changeHandler}
        //controlled component:- maintian state inside component using value attribute in input field

        value={Data.name} //save state in input element
        />

<input type="text" 
        placeholder='Johnxxxx@gmail.com' 
        name='email' 
        onChange={changeHandler}
        //controlled component:- maintian state inside component using value attribute in input field

        value={Data.email} //save state in input element
        />

<input type="text" 
        placeholder='XXXXXXXXXX' 
        name='phoneno' 
        onChange={changeHandler}
        //controlled component:- maintian state inside component using value attribute in input field

        value={Data.phoneno} //save state in input element
        />

        <button>
            Submit
        </button>
        </form>
    </div>
  )
}

export default Contactwrap