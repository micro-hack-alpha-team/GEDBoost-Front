import React from 'react'
import image from '../assets/bmpn.png'

function BpmnStatic() {
  return (
    <div className='m-2'>
      <p className='text-left font-bold text-xl m-1'>Votre Diagramme d'activité:</p>
      <img className='m-2' src={image} />
    </div>
  )
}

export default BpmnStatic