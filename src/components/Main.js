import React, { useState, useEffect, useRef } from 'react';
import { preload } from 'react-dom';
import './Main.css';
import projectData from './ProjectData';

const useVideoPreloader = () => {
    const videoUrls = [
        '/videos/hilbert1.mp4',
        '/videos/hilbert2.mp4',
        '/videos/hilbert3.mp4',
        '/videos/minesweeper.mov',
        '/videos/ShelterGameplay.mp4'
    ];

    useEffect(() => {
        videoUrls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'video';
            link.href = url;
            document.head.appendChild(link);
        });

        const videos = videoUrls.map(url => {
            const video = document.createElement('video');
            video.src = url;
            video.preload = 'auto';
            video.load();
            video.style.display = 'none';
            document.body.appendChild(video);
            return video;
        });

        return () => videos.forEach(v => v.remove());
    }, []);
};

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleCanPlay = () => {
            setIsLoaded(true);
            video.play().catch(e => console.debug('Autoplay prevented:', e));
        };

        video.addEventListener('canplay', handleCanPlay);
        video.load(); 

        return () => {
            video.removeEventListener('canplay', handleCanPlay);
            video.pause();
            video.currentTime = 0;
        };
    }, [src]);

    return (
        <div className={`video-container ${isLoaded ? 'loaded' : 'loading'}`}>
            {!isLoaded && (
            <div className="video-loader" aria-busy="true" aria-live="polite">
                <div className="loading-spinner" aria-hidden="true"></div>
                    <span className="loading-text">Loading video...</span>
                     </div>
            )}
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                playsInline
                className="rotating-video"
                disablePictureInPicture
                aria-hidden={!isLoaded}
            />
        </div>
    );
};


const Main = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    useVideoPreloader();

    const handleSkillClick = (skill) => {
        setActiveSkill(skill);
    };

    const handleModalClick = (e) => {
        // Close modal when clicking on the background (not the content)
        if (e.target.className === 'skill-modal') {
            setActiveSkill(null);
        }
    };

    const handleOpenSkill = (skillId) => {
        const selectedSkill = projectData.find((skill) => skill.id === skillId);
        if (selectedSkill) {
            setActiveSkill(selectedSkill);
        }
    };


    return (
        <div id="main" className="main-container">

            <h2 className="main-header">PROJECTS</h2>

            <div className="skills-cloud">
                {projectData.map((skill) => {
                    // Determine button size based on importance level
                    const sizeClass = skill.importance === 'high'
                        ? 'skill-button-large'
                        : skill.importance === 'medium'
                            ? 'skill-button-medium'
                            : 'skill-button-small';

                    return (
                        <button
                            key={skill.id}
                            className={`skill-button ${sizeClass}`}
                            onClick={() => handleSkillClick(skill)}
                            style={skill.bgImage ? { backgroundImage: `url(${skill.bgImage})` } : {}}
                        >
                            {skill.showNameOnButton && skill.name}
                        </button>
                    );
                })}
            </div>

            {/* {activeSkill && ( */}
            {activeSkill?.videos && (
                <div className="skill-modal" onClick={handleModalClick}>
                    <div className="skill-content">

                        <div className="skill-details">
                            <h3>{activeSkill.name}</h3>

                            <div className={`skill-body ${!activeSkill.imgSrc && !activeSkill.videos ? 'no-media' : ''}`}>
                                {(activeSkill.imgSrc || activeSkill.videos) && (
                                    <div className="skill-image-container">
                                        {activeSkill.imgSrc ? (
                                            <img src={activeSkill.imgSrc} alt={activeSkill.name} />
                                        ) : (
                                            <div className={`video-rotation-container ${activeSkill.videoOrientation === 'vertical' ? 'vertical' : 'horizontal'}`}>
                                                {/* {activeSkill.videos.map((videoSrc, index) => (
                                                    <video
                                                        key={index}
                                                        src={videoSrc}
                                                        autoPlay
                                                        loop
                                                        muted
                                                        className="rotating-video"
                                                    />
                                                ))} */}
                                                {activeSkill.videos.map((src, i) => (
                                                    <VideoPlayer key={i} src={src} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="skill-text-content">
                                    <div className="skill-description">
                                        {activeSkill.description()}
                                    </div>

                                    {activeSkill.relatedProjects && activeSkill.relatedProjects.length > 0 && (
                                        <div className="related-projects">
                                            <h4>Related Projects</h4>
                                            <ul>
                                                {activeSkill.relatedProjects.map(({ label, skillId }, index) => (
                                                    <li key={index}>
                                                        <button
                                                            className="link-button"
                                                            onClick={() => handleOpenSkill(skillId)}
                                                        >
                                                            {label}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="close-button" onClick={() => setActiveSkill(null)}>X</button>
                </div>
            )}
        </div>
    )
};

export default Main;