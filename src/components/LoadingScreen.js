import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const totalDuration = 1500; 
  const startTime = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    startTime.current = Date.now();
    const assets = document.querySelectorAll('img, video');

    const animateProgress = () => {
      const elapsed = Date.now() - startTime.current;
      const newProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId.current = requestAnimationFrame(animateProgress);
      } else if (assetsLoaded) {
        onLoadComplete(); 
      }
    };

    animateProgress();

    // Track asset loading
    if (assets.length === 0) {
      setAssetsLoaded(true);
    } else {
      let loadedCount = 0;
      const updateProgress = () => {
        loadedCount++;
        if (loadedCount === assets.length) {
          setAssetsLoaded(true);
        }
      };

      assets.forEach((asset) => {
        if (asset.complete) {
          updateProgress();
        } else {
          asset.addEventListener('load', updateProgress);
          asset.addEventListener('error', updateProgress);
        }
      });

      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
        assets.forEach((asset) => {
          asset.removeEventListener('load', updateProgress);
          asset.removeEventListener('error', updateProgress);
        });
      };
    }
  }, [onLoadComplete, assetsLoaded, totalDuration]);

  useEffect(() => {
    if (progress === 100 && assetsLoaded) {
      onLoadComplete();
    }
  }, [progress, assetsLoaded, onLoadComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1>Loading...</h1>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;