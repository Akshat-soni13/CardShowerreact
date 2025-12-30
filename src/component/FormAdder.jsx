import React, { useState } from 'react'

const FormAdder = ({ sendData }) => {

    const FormHandler=(e)=>{
        e.preventDefault();
        // console.log(e.target)
        // console.log(Data)
        e.target.reset()
        setuserData([...userData,Data])
        // console.log(userData)
        
        sendData(Data)

    }


    const [userData, setuserData] = useState([]);
    const [Data, setData] = useState({});

  return (
    <div className='w-[40%]  text-white h-screen  p-[5rem] bg-[url("https://images.unsplash.com/photo-1522296820595-ece37b02e531?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] backdrop-blur-5xl '>
        <h1 className='text-2xl text-center'>Add New User</h1>
        <form  onSubmit={(e)=>{
           FormHandler(e)

        }}  className='flex flex-col gap-5 mt-5 p-3  bg-[#ff00801f] rounded-2xl' >
            <div className='flex  items-center justify-between' >
            <label htmlFor="">Enter Name</label>
            <input required type="text" placeholder='Enter Name here' className='border-2 outline-none rounded-xl p-2' id="name" onChange={function(e)
                {
                   setData({...Data,name:e.target.value})
                }
            } />
            </div>
            <div className='flex  items-center justify-between' >
            <label htmlFor="">Email</label>
            <input required type="email" placeholder='Enter Email here' className='border-2 outline-none rounded-xl p-2' id="email" onChange={function(e)
                {
                   setData({...Data,email:e.target.value})
                }
            }  />
            </div>
            <div className='flex  items-center justify-between' >
            <label htmlFor="">Image</label>
            <input type="tel" placeholder='Enter Image Url here' className='border-2 outline-none rounded-xl p-2' id="image" onChange={function(e)
                {
                   setData({...Data,Image:e.target.value})
                }
            } />
            
            </div>
            <div className='flex  items-center justify-between' >
            <label htmlFor="">Enter Contact</label>
            <input type="tel" placeholder='Enter Name here' className='border-2 outline-none rounded-xl p-2' id="contact" onChange={function(e)
                {
                   setData({...Data,contact:e.target.value})
                }
            } />
            
            </div>
            
            <button className='border-2 w-fit p-2 rounded-2xl pr-10 pl-10 mx-auto hover:cursor-pointer active:bg-amber-600'>Add</button>
          


        </form>


    </div>
  )
}

export default FormAdder