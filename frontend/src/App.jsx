import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import History from './components/History';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>PDF Merge Application</h1>
      <UploadForm />
      {email && <History email={email} />}
    </div>
  );
};

export default App;
