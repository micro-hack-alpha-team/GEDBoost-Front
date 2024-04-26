// Survey.js
import React, { useState } from 'react';
import Question from './Question';

const questions = [
{
id: 1,
type: 'checkbox',
question: 'What are your favorite colors?',
options: ['Red', 'Blue', 'Green'],
},
{
id: 2,
type: 'text',
question: 'What is your name?',
},
{
id: 3,
type: 'radio',
question: 'What is your gender?',
options: ['Male', 'Female', 'Other'],
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
};

const handlePrev = () => {
setCurrentQuestionIndex(currentQuestionIndex - 1);
};

const handleSubmit = () => {
console.log(responses);
// Here you can send responses to a backend, or perform any other action
};

return (
<div className=''>
    <Question className='' question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
    <button className='m-2' onClick={handlePrev} disabled={currentQuestionIndex === 0}>
    Previous
    </button>
    <button className='m-2' onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
    Next
    </button>
    {currentQuestionIndex === questions.length - 1 && (
    <button className='m-2' onClick={handleSubmit}>Submit</button>
    )}
</div>
);
};

export default Survey;
