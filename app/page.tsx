import React from 'react';
import Image from 'next/image';
import Header from './components/Header';
import WeightInfo from './components/WeightInfo';
import Graph from './components/Graph';
import Button from './components/Button';
import './globals.css';

const HomePage = () => {
  return (
    <div
      style={{ background: 'var(--Purple, linear-gradient(180deg, #B39FFE 0%, #725EBD 100%))' }}
      className="flex min-h-screen items-center justify-center p-4 md:p-12 font-syne"
    >
      <div className="w-full max-w-[600px] md:p-12 text-white">
        <Header />

        <div className="w-full h-[1px] bg-white/20 rounded-full mb-8">
          <div className="h-[3px] w-1/4 bg-white rounded-full"></div>
        </div>

        <WeightInfo />

        <div className="relative w-full h-fit mt-6">
          <Graph />

          <Image
            src="/graph-frame.svg"
            alt="Graph frame"
            // Set base dimensions for mobile
            width={325}
            height={250}
            // Override dimensions for larger screens
            className="md:w-[400px] md:h-[300px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        </div>

        <p className="text-center font-light opacity-70 mt-20">
          On average, GLP-1 patients lost
        </p>
        <p className="text-center font-light mb-8">
          18% of their body weight
        </p>

        <Button />
      </div>
    </div>
  );
};

export default HomePage;
