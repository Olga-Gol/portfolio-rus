import React from 'react';
import './Experience.css';

const Experience = () => (
  <div id="experience" className="experience-container">
    <h2 className="experience-header">EXPERIENCE</h2>

    <div className="timeline-container">

      <div className="timeline-item">
        <div className="time-period">January 2024 - May 2025</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Computer Science Teaching Assistant</div>
          <div className="employer-name">Mount Holyoke College, South Hadley, MA</div>
          <div className="job-detail">I conducted one-on-one mentoring sessions for students in an <strong>Algorithms course, </strong>
            helping them understand fundamental algorithms such as <strong>Dijkstra's, BFS, DFS, Kruskal's, and Prim's </strong>
            algorithms. I also guided students in analyzing algorithmic complexity and optimizing their code for time and space
            efficiency.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">September 2022 - May 2025</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Mathematics Teaching Assistant</div>
          <div className="employer-name">Mount Holyoke College, South Hadley, MA</div>
          <div className="job-detail">I provided tutoring sessions for small groups of students enrolled in a
            <strong> linear algebra</strong> course, assisted the course instructor by grading assignments and providing feedback
            to students, and established communication between the instructor and students.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">June 2024 - August 2024</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Undergraduate Research Assistant</div>
          <div className="employer-name">University of Maryland, College Park, MD </div>
          <div className="job-detail">I investigated theoretical problems in <strong>computational geometry</strong> within the Hilbert metric space,
            focusing on minimum enclosing ball problems. I proved that minimum radius balls over metric spaces with the Heine-Borel
            property are LP-type problems, representing a significant theoretical contribution to the field. I developed explicit
            primitives for computing minimum radius balls in the Hilbert metric and successfully proved extension properties for
            weak metric spaces. Additionally, I contributed to the development of dynamic <strong>JavaScript-based software </strong>
            that enables manipulation and visualization of Funk, reverse Funk, and Thompson balls in convex polygonal domains.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">May 2024 - August 2024</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Proposal Development Apprentice</div>
          <div className="employer-name">L'Space Academy NASA Proposal Writing and Evaluation Experience, Remote</div>
          <div className="job-detail">I completed <strong>proposal development</strong> training through NASA's L'SPACE Academy
            under a NASA Chief Technologist. I wrote key sections of a competitive funding proposal with a cross-functional team,
            meeting NASA's technical requirements and deadlines. I <strong>chaired review panels</strong> evaluating competing
            proposals and provided structured feedback. I presented to industry professionals and led revisions based on their
            critiques to improve project feasibility and merit.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">June 2022 - August 2022</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Software Development Intern</div>
          <div className="employer-name">Pension Fund of the Russian Federation, Ufa</div>
          <div className="job-detail">I maintained and monitored <strong>SQL databases</strong> for pension records, performing
            regular validation checks to ensure data integrity. I collaborated with Senior Software Engineers on
            <strong> Python scripting</strong> for large-scale data migration and cleaning projects. I also contributed to team
            documentation efforts and followed <strong>version control</strong> protocols to maintain codebase quality.
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Experience;
