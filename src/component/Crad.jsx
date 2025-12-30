import React from 'react'

const Crad = (val) => {
    return (
    <div
  className="border-2 h-[10rem] w-full text-2xl text-white rounded-xl flex"
  style={{ backgroundColor: val.color }}
>
        {/* {val.val.name} */}

        <div className=' w-[70%] h-[100%] p-2 flex items-center '>
            <img className='h-[90%] rounded-full' src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='flex flex-col text-xl  ml-5 gap-3'>
                <h2>Name:  {val.val.name}</h2>
                <h3 ><i class="ri-mail-line"></i> {val.val.email}</h3>
                <h4><i class="ri-smartphone-line"></i>{val.val.contact}</h4>
            </div>
        </div>
        <div  className=' w-[29%] h-[100%] p-3 flex justify-center items-center '>
            <div className='border-2 p-3 rounded-2xl  bg-green-500 active:scale-90 '>Call Me</div>
        </div>

    </div>
  )
}

export default Crad