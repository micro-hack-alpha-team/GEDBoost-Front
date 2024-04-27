import React, { useState } from 'react'
import BpmnStatic from './BpmnStatic'
import SeleniumScript from './Selscript'
import { BsCaretRightSquareFill, BsCaretRightFill,BsCaretLeftFill } from "react-icons/bs";


function Result() {

const [isbpmn, setIsbpmn] = useState(true)
const [isCode, setIsCode] = useState(false)
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

const handlePrev = () =>{
    setCurrentQuestionIndex(currentQuestionIndex-1)
    setIsbpmn(true)
    setIsCode(false)
    window.scrollTo({
        top: 0,
        behavior: 'instant' // Smooth scrolling animation
    });
}

const handleNext = () =>{
    setCurrentQuestionIndex(currentQuestionIndex+1)
    setIsbpmn(false)
    setIsCode(true)
    window.scrollTo({
        top: 0,
        behavior: 'instant' // Smooth scrolling animation
      });
}

  return (
    <div className='h-full'>
    <div className='bg-slate-200 p-8'>
        {isbpmn && <BpmnStatic/>}
        {isCode && <SeleniumScript/>}
        <div className='flex justify-between'>
            <div>
                <button className={currentQuestionIndex === 0 ? 'm-1 bg-gray-400 text-white p-4' : 'p-4 m-1 bg-blue-600 text-white'} onClick={handlePrev} disabled={currentQuestionIndex === 0}>
                    <span className='flex items-center'><BsCaretLeftFill/> &nbsp; Previous</span>
                </button>
            </div>
            <div>
                <button className={currentQuestionIndex === 1 ? 'm-1 bg-gray-400 p-4 text-white' : 'p-4 m-1 bg-blue-600 text-white'} onClick={handleNext} disabled={currentQuestionIndex === 1}>
                    <span className='flex items-center'> Next <BsCaretRightFill /> </span>
                </button>
            </div>
        </div>
    </div>
</div>
)
}

export default Result