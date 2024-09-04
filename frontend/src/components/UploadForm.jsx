import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState('');

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('files', file));
    formData.append('email', email);

    try {
      const response = await axios.post('/api/pdf/merge', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        accept=".pdf"
        required
      />
      <button type="submit">Upload and Merge PDFs</button>
    </form>
  );
};

export default UploadForm;
