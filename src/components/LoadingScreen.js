import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = document.querySelectorAll('img, video');
    if (assets.length === 0) {
      setProgress(100);
      setTimeout(() => onLoadComplete(), 500);
      return;
    }

    let loadedCount = 0;
    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / assets.length) * 200);
      setProgress(newProgress);
      if (newProgress === 100) {
        setTimeout(() => onLoadComplete(), 1000);
      }
    };

    assets.forEach(asset => {
      if (asset.complete) {
        updateProgress();
      } else {
        asset.addEventListener('load', updateProgress);
        asset.addEventListener('error', updateProgress); 
      }
    });

    return () => {
      assets.forEach(asset => {
        asset.removeEventListener('load', updateProgress);
        asset.removeEventListener('error', updateProgress);
      });
    };
  }, [onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1>Loading...</h1>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="progress-text">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;