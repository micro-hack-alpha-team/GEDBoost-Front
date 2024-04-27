// Survey.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import { BsCaretRightSquareFill, BsCaretRightFill,BsCaretLeftFill } from "react-icons/bs";
import { Progress } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'



const questions = [
{
id: 1,
type: 'checkbox',
question: 'Quels sont les types de documents que le client traite?',
options: ['FACTURES', 'Contrats', 'Documents RH', 'RAPPORT'],
},
{
id: 1,
type: 'checkbox',
question: 'Quel est le volume estimé de documents à gérer mensuellement?',
options: ['<100', 'Entre 100 et 500', 'Entre 500 et 1000', '>1000'],
},
{
    id: 4,
    type: 'model',
    question: 'Upload a file',
}
// Add more questions as needed
];

const Survey = () => {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [responses, setResponses] = useState({});

const handleAnswer = (response) => {
setResponses({ ...responses, [currentQuestionIndex]: response });
};

const handleNext = () => {
setCurrentQuestionIndex(currentQuestionIndex + 1);
index=null;
};

const handlePrev = () => {
setCurrentQuestionIndex(currentQuestionIndex - 1);
index=null;
};

const [showLoad, setShowLoad] = useState(false)
const [submitted, setSubmitted] = useState(false);
const [progressing, setProgressing] = useState(false);
const handleSubmit = () => {

    setShowLoad(true);
    setProgressing(true);

    // Perform any necessary actions (e.g., submitting data to a server)
    // Simulate a delay for the progress bar
    setTimeout(() => {
        setShowLoad(false);
        setSubmitted(true);
    }, 2000);

    // You can add additional actions here if needed
};

useEffect(() => {
    // Check if submission has been completed
    if (submitted) {
        // Add a delay of 3 seconds before navigating to '/diagram'
        const timeoutId = setTimeout(() => {
            // Perform navigation
            window.location.href = '/result';
        }, 1000);

        // Clear the timeout to avoid navigation if the component unmounts or submitted state changes
        return () => clearTimeout(timeoutId);
    }
}, [submitted]);



return (
<div className='h-full'>
    <p className='text-xl w-11/12 my-3 top-4 mx-auto'>Afin de personnaliser votre paramétrage, merci de prendre quelques instants pour répondre aux questions suivantes:</p>
    <div className='bg-slate-200 p-8'>
        <Question className='' question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
        {progressing ? (<div className='my-4'>
                        
                        {showLoad && <div className=""><Progress size='md' isIndeterminate /></div>}
                        {submitted && <div className="notification-message">
                        <Alert status='success' variant='solid'>
                            <AlertIcon />
                            Survey submitted successfully!
                        </Alert>
                        </div>}
                    </div>) :
                    (
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
                    )}
    </div>
</div>
);
};

export default Survey;