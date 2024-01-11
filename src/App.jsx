import React from 'react';
import './App.css';
import image from './assets/Kalvium-Logo.png';

const App = () => {
  return (
    <div>
      <header className="bg-[#f43f5e] flex justify-between text-white">
        <div className="flex justify-evenly">
          <h1 className="m-6 text-lg font-bold">Kalvium</h1>
          <p className="m-6">Contacts</p>
          <p className="m-6">Courses</p>
          <p className="m-6">About us</p>
        </div>
        <button className="m-6 border text-white border-white rounded px-2">Login</button>
      </header>

      <button className="border bg-[#1d4ed8] border-Blue text-white px-2 py-1 rounded mx-20 my-5">
        Button One
      </button>

      <div className="border border-[#f43f5e] p-5 mx-20 bg-[#fecdd3] text-[#be123c]">
        <span className="font-bold">Alert! </span>
        <span>This is awesome!</span>
      </div>

      <div className="flex mx-auto my-10 border max-w-max p-10 shadow-lg">
        <img src={image} alt="Kalvium" className="mx-5" />
        <div>
          <h1>Kalvium store</h1>
          <h1>You have a new course!</h1>
        </div>
      </div>

      <footer className="border border-[#94a3b8] py-3 text-center bg-[#cbd5e1]">
        <span>&copy; 2021 Copyright: </span>
        <span className="font-bold">Kalvium</span>
      </footer>
    </div>
  );
};

export default App;
