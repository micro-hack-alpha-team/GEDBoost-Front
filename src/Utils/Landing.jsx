import React from 'react'
import { useNavigate } from "react-router-dom";
import myGif from '../assets/logo.gif'
<assets />

function Landing() {
    const navigate = useNavigate()
  
  return (
<div className='flex flex-col justify-around h-screen mx-auto w-full ml-14 overflow-x-hidden'>
    <div className='home-background w-screen h-screen absolute'></div>
    <div className='z-10'>
        <p className='font-bold text-6xl my-4'>GEDBoost</p>
        <img className='mx-auto w-64 rounded-lg' src={myGif} alt='GDTBoost' />
        <div className='mx-auto'>
            <p className='w-2/3 mx-auto my-6 font-bold text-lg'>Optimisez vos déploiements GED. Accélérez la mise en œuvre de vos solutions pour vos clients avec notre plateforme tout-en-un. Simplifiez le paramétrage, la formation et la conduite du changement pour des résultats rapides et efficaces.</p>
            <button onClick={() => navigate("/home")} className='p-2 bg-blue-400 my-6 w-96'>Commencer</button>
        </div>
    </div>
    </div>
)
}

export default Landing