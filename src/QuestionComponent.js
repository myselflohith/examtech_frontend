// QuestionComponent.js
import React, { useState, useEffect } from 'react';

const QuestionComponent = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.MathJax !== 'undefined') {
      window.MathJax.typeset(); // Process LaTeX code
    }
  }, [question, options]);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleOptionChange = (index, event) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* Render the question textarea */}
      <textarea
        placeholder="Type your LaTeX question here..."
        value={question}
        onChange={handleQuestionChange}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      {/* Render the MathJax equation for the question */}
      <div id="math-question">{question}</div>
      
      {/* Render options and their MathJax equations */}
      {options.map((option, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
          {/* Render the option input box */}
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(event) => handleOptionChange(index, event)}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          {/* Render the MathJax equation for the option */}
          <div id={`math-option-${index}`}>{option}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionComponent;
