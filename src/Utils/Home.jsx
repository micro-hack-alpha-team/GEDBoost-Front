import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
return (
<div>
    <p className='text-2xl my-4 font-bold '>Choisissez le volet que vous souhaitez accélérer pour votre solution GED</p>
    <div className='flex justify-around'>
        <div className='w-64 h- p-4 bg-blue-700 text-white rounded hover:bg-blue-800 '>
            <p className='text-lg font-bold my-2'>Parametrage</p>
            <p className='my-2'>Generation du dci, Script de parametrage et encore</p>
            <button className='p-4 bg-blue-500 border' onClick={() => navigate("/survey")}>Commencer</button>
        </div>
        
        
    </div>
</div>
)
}

export default Home