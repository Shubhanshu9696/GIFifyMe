// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';

function App() {
  return (
    <div className="w-full flex flex-col justify-centre background h-100vh items-center">
      <h1 className='bg-white text-3xl font-bold py-1 rounded-lg mainHeader m-3 mx-auto'>Random Gif Generator</h1>
      
      <div className='flex w-full mx-auto flex-col items-center mb-4 '>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
