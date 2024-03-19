// App.js
import React from 'react';
import PdfComponent from './PdfComponent';
import QuestionComponent from './QuestionComponent';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <PdfComponent />
      <QuestionComponent />
    </div>
  );
};

export default App;
