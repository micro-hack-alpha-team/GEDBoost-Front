import React from 'react'
import image from '../assets/bmpn.png'

function BpmnStatic() {
  return (
    <div className='m-4'>
      <p className='text-left font-bold text-lg m-2'>Votre Diagramme d'activité est pret:</p>
      <img className='m-2' src={image} />
      <div className='flex justify-between'>
                        <div>
                            <button className={currentQuestionIndex === 0 ? 'm-1 bg-gray-400 text-white p-4' : 'p-4 m-1 bg-blue-600 text-white'} onClick={handlePrev} disabled={currentQuestionIndex === 0}>
                                <span className='flex items-center'><BsCaretLeftFill/> &nbsp; Previous</span>
                            </button>
                        </div>
                        <div>
                            {currentQuestionIndex === questions.length - 1 && (
                                <button className='m-1 p-4 bg-blue-600 text-white' onClick={handleSubmit}>Submit</button>
                            )}
                            <button className={currentQuestionIndex === (questions.length - 1) ? 'm-1 bg-gray-400 p-4 text-white' : 'p-4 m-1 bg-blue-600 text-white'} onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
                                <span className='flex items-center'> Next <BsCaretRightFill /> </span>
                            </button>
                        </div>
      </div>
    </div>
  )
}

export default BpmnStatic