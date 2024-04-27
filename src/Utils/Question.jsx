// Question.js
import React from 'react';
import { useState } from 'react';
import pdficon from '../assets/pdficon.png'
import pcicon from '../assets/pcicon.png'
import upld from '../assets/upload.png'
import { BsUpload } from "react-icons/bs";



const Question = ({ question, onAnswer }) => {
const handleResponse = (e) => {
onAnswer(e.target.value);
};
const handleFileUpload = (e) => {
    const file = e.target.files[0];
    onAnswer(file);
};
const [selectedId, setSelectedId] = useState(null);

switch (question.type) {
case 'checkbox':
    return (
    <div className='text-white'>
        <div className='w-9/12 p-4 bg-blue-600 m-4 mx-auto'><h2>{question.question}</h2></div>
            <div className='flex justify-around'>{question.options.map((option, index) => (
            <div className='w-9/12 p-2 m-1 rounded-sm' onClick={() => setSelectedId(index)}>
                <label key={index}>
                <div className={selectedId == index ? 'p-4 bg-blue-600' : 'p-4 bg-slate-400'}>{index + 1}. {option}</div>
                </label>
            </div>
        ))}
        </div>
    </div>
    );
case 'text':
    return (
    <div className='text-white'>
        <div className='w-9/12 p-4 bg-blue-600 m-4 mx-auto'><h2>{question.question}</h2></div>
        <input className='border border-black rounded-sm' type="text" onChange={handleResponse} />
    </div>
    );
case 'radio':
    return (
    <div className='text-white'>
        <div className='w-9/12 p-4 bg-blue-600 m-4 mx-auto'><h2>{question.question}</h2></div>
        {question.options.map((option, index) => (
        <label key={index}>
            <input type="radio" name={`question-${question.id}`} value={option} onChange={handleResponse} />
            {option}
        </label>
        ))}
    </div>
    );
case 'file':
    return (
        <div>
        <div className='w-9/12 p-4 bg-blue-600 m-4 mx-auto'><h2>{question.question}</h2></div>
        <input type="file" onChange={handleFileUpload} />
        </div>
    );
case 'model':
    return(<div>
            <p className='font-bold font-xl'>Télécharger des fichiers (1/2)</p>
            <p className=' font-lg'>Veuillez télécharger l’organigramme de votre entreprise et la description des postes</p>
            <label for="dropzone-file" class="flex flex-col h-96 p-6 items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                <div class="flex flex-col items-center justify-center">        
                    <p class="mb-2 text-lg text-gray-500 ">or drag and drop</p>
                    <img src={upld} className='w-32'/>
                    <p class="text-xs text-gray-500 dark:text-gray-400">in PDF Format</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div>)
default:
    return null;
}
};

export default Question;
