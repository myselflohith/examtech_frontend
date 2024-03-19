// PdfComponent.js
import React, { useState } from 'react';

const PdfComponent = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  return (
    <div style={{ flex: 1 }}>
      <input type="file" onChange={handlePdfUpload} />
      {pdfFile && <embed src={URL.createObjectURL(pdfFile)} width="100%" height="100%" />}
    </div>
  );
};

export default PdfComponent;
