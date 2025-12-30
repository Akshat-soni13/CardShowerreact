import React, { useState } from "react";
import ReactDom from "react-dom/client"
import FormAdder from "./component/FormAdder";
import UserDisplay from "./component/UserDisplay";
import Card from "./component/Crad"
const conatiner = document.querySelector("#root");

const root = ReactDom.createRoot(conatiner);



const Main = () => {

     const [users, setUsers] = useState([{name:"akshat",email:"akisoni13@gmail.com",Image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , contact:9898269379 }])

    const getFormData = (user) => {
    setUsers([...users, user])
  }
    // console.log(users)
    const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

  return (
    <div className="bg-black h-screen flex w-screen ">

      <FormAdder sendData={getFormData} />
    <div className="overflow-auto w-[60%] ">
      <h1 className="text-center text-2xl text-white mt-2 underline ">Contact List</h1>
       <div className=" h-screen w-[100%] text-white p-2 mt-5  flex flex-col gap-5 h-screen ">



  {
    users.map(function (val, idx) {
      return <Card val={{...val}}  color={getRandomColor()}/>
    })
  }
    </div>
  </div>


    </div>    
    
  )
}


root.render(<Main/>)