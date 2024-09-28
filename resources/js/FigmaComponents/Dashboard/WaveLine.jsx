import React, { useEffect, useState } from 'react';
import WaveDot from './WaveDot';

const WaveLine = () => {
  const [dots, setDots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activatedDots, setActivatedDots] = useState(new Set());
  const items = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
    { id: 7, label: 'Item 7' },
    { id: 8, label: 'Item 8' },
    { id: 9, label: 'Item 9' },
    { id: 10, label: 'Item 10' },
    { id: 11, label: 'Item 11' },
    { id: 12, label: 'Item 12' },
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
    { id: 7, label: 'Item 7' },
    { id: 8, label: 'Item 8' },
    { id: 9, label: 'Item 9' },
    { id: 10, label: 'Item 10' },
    { id: 11, label: 'Item 11' },
    { id: 12, label: 'Item 12' },
  ];

  useEffect(() => {
    const svg = document.getElementById('waveLineSVG');
    const paths = svg.querySelectorAll('path');
    const totalDots = items.length;
    const newDots = [];

    let totalLength = 0;
    paths.forEach(path => {
      totalLength += path.getTotalLength();
    });

    const step = totalLength / totalDots;
    let accumulatedLength = 0;

    paths.forEach(path => {
      const pathLength = path.getTotalLength();
      while (accumulatedLength + step <= pathLength) {
        accumulatedLength += step;
        const point = path.getPointAtLength(accumulatedLength);
        newDots.push(point);
      }
      accumulatedLength -= pathLength; // ajusta para a próxima iteração
    });

    setDots(newDots);
  }, []);

  const handleNext = () => {
    setActivatedDots(prev => new Set(prev).add(currentIndex));
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="hidden sm:block wave-line absolute -top-8">
      <svg id="waveLineSVG" width="4000" height="200" xmlns="http://www.w3.org/2000/svg" className="absolute ">
        <path d="M 0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100 T 900 100 T 1000 100"
          stroke="#1A76CC" fill="transparent" strokeWidth="2" />
        <path d="M 1000 100 Q 1050 50, 1100 100 T 1200 100 T 1300 100 T 1400 100 T 1500 100 T 1600 100 T 1700 100 T 1800 100 T 1900 100 T 2000 100"
          stroke="#1A76CC" fill="transparent" strokeWidth="2" />
        <path d="M 2000 100 Q 2050 50, 2100 100 T 2200 100 T 2300 100 T 2400 100 T 2500 100 T 2600 100 T 2700 100 T 2800 100 T 2900 100 T 3000 100"
          stroke="#1A76CC" fill="transparent" strokeWidth="2" />
        <path d="M 3000 100 Q 3050 50, 3100 100 T 3200 100 T 3300 100 T 3400 100 T 3500 100 T 3600 100 T 3700 100 T 3800 100 T 3900 100 T 4000 100"
          stroke="#1A76CC" fill="transparent" strokeWidth="2" />
      </svg>
      {dots.map((dot, index) => (
        <WaveDot
          key={index}
          x={dot.x}
          y={dot.y}
          isActive={index === currentIndex}
          isActivated={activatedDots.has(index)}
        />
      ))}
      {/* <button
        onClick={handleNext}
        className="absolute bottom-0 left-0 m-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Próximo Item
      </button> */}
    </div>
  );
};

export default WaveLine;
