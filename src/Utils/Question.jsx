// Question.js
import React from 'react';
import pdficon from '../assets/pdficon.png'
import pcicon from '../assets/pcicon.png'

const Question = ({ question, onAnswer }) => {
const handleResponse = (e) => {
onAnswer(e.target.value);
};
const handleFileUpload = (e) => {
    const file = e.target.files[0];
    onAnswer(file);
};


switch (question.type) {
case 'checkbox':
    return (
    <div>
        <h2>{question.question}</h2>
        {question.options.map((option, index) => (
        <label key={index}>
            <input type="checkbox" value={option} onChange={handleResponse} />
            {option}
        </label>
        ))}
    </div>
    );
case 'text':
    return (
    <div>
        <h2>{question.question}</h2>
        <input type="text" onChange={handleResponse} />
    </div>
    );
case 'radio':
    return (
    <div>
        <h2>{question.question}</h2>
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
        <h2>{question.question}</h2>
        <input type="file" onChange={handleFileUpload} />
        </div>
    );
case 'model':
    return(<div>
            <label for="dropzone-file" class="flex flex-col h-96 p-6 items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                <div class="flex flex-col items-center justify-center">
                    <p className=''>Upload your models</p>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <img className="w-32" src={pdficon} />
                    <p class="text-xs text-gray-500 dark:text-gray-400">in PDF Format</p>
                    <p className='p-4 bg-blue-600 rounded-md my-8 text-white'>Upload your model</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        <div className='absolute -bottom-24  w-full flex justify-around'>
            <div className='flex flex-col items-center '>
                <img className=' w-24' src={pcicon}/>
                <p className='font-bold'>Get instante quote</p>
                <p className='max-w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col items-center '>
                <img className=' w-24' src={pcicon}/>
                <p className='font-bold'>Get instante quote</p>
                <p className='max-w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col items-center '>
                <img className=' w-24' src={pcicon}/>
                <p className='font-bold'>Get instante quote</p>
                <p className='max-w-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>)
default:
    return null;
}
};

export default Question;
