import React from 'react';
import './Skills.css';

const skillCategories = {
  Coding: [
    { name: 'JavaScript', level: 4 },
    { name: 'Java', level: 4 },
    { name: 'Python', level: 4 },
    { name: 'HTML', level: 4 },
    { name: 'CSS', level: 3 },
    { name: 'TypeScript', level: 3 },
    { name: 'MATLAB', level: 3 },
    { name: 'C', level: 2 },
    { name: 'SQL', level: 2 },
  ],
  Tools: [
    { name: 'React', level: 4 },
    { name: 'React Native', level: 3 },
    { name: 'Spring Boot', level: 3 },
    { name: 'Expo', level: 3 },
    { name: 'Git', level: 3 },
    { name: 'TensorFlow', level: 3 },
    { name: 'PyTorch', level: 2 },
    { name: 'Node.js', level: 2 },
    { name: 'Next.js', level: 2 }, 
    { name: 'Firebase Database', level: 2 },
  ],
  Additional: [
    { name: 'Machine Learning', level: 3 },
    { name: 'Neural Networks', level: 3 },
    { name: 'Linear Programming', level: 3 },
    { name: 'Optimization Methods', level: 3 },
    { name: 'Data Visualization', level: 2 },
    { name: 'Algorithm Design', level: 2 },
  ],
  Languages: [
    { name: 'Russian', level: 5 },
    { name: 'English', level: 5 },
    { name: 'German', level: 3 },
  ],

};

const renderStars = (level) => (
  Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star ${i < level ? 'filled' : ''}`}>★</span>
  ))
);

const Skills = () => (
  <div id="skills" className="skills-container">
    <h2 className="skills-header">SKILLS</h2>
    <div className="skills-categories">

      <div className="skill-category coding">
        <h3>Coding</h3>
        {skillCategories.Coding.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span>{skill.name}</span>
            <div className="stars">{renderStars(skill.level)}</div>
          </div>
        ))}
      </div>

      <div className="skill-category tools">
        <h3>Tools</h3>
        {skillCategories.Tools.map((skill) => (
          <div key={skill.name} className="skill-item">
            <span>{skill.name}</span>
            <div className="stars">{renderStars(skill.level)}</div>
          </div>
        ))}
      </div>
      
      <div className="skill-category extra">

        <div className="additional">
          <h3>Additional</h3>
          {skillCategories.Additional.map((skill) => (
            <div key={skill.name} className="skill-item">
              <span>{skill.name}</span>
              <div className="stars">{renderStars(skill.level)}</div>
            </div>
          ))}
        </div>

        <div className="languages">
          <h3>Languages</h3>
          {skillCategories.Languages.map((skill) => (
            <div key={skill.name} className="skill-item">
              <span>{skill.name}</span>
              <div className="stars">{renderStars(skill.level)}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

export default Skills;
