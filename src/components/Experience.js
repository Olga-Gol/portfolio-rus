import React from 'react';
import './Experience.css';

const Experience = () => (
  <div id="experience" className="experience-container">
    <h2 className="experience-header">ОПЫТ</h2>

    <div className="timeline-container">

      <div className="timeline-item">
        <div className="time-period">январь 2024 - май 2025</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Ассистент преподавателя по информатике</div>
          <div className="employer-name">Mount Holyoke College, Массачуссеттс, США</div>
          <div className="job-detail">Проводила индивидуальные консультации по алгоритмам 
            <strong> (Дейкстры, BFS/DFS, Крускала, Прима)</strong>, помогала студентам анализировать сложность 
            и <strong>оптимизировать код</strong> .
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">сентябрь 2022 - май 2025</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Ассистент преподавателя по математике</div>
          <div className="employer-name">Mount Holyoke College, Массачуссеттс, США</div>
          <div className="job-detail">Вела семинары по <strong>линейной алгебре</strong>, проверяла работы и 
            координировала взаимодействие между студентами и преподавателем.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">июнь 2024 - август 2024</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Научный ассистент</div>
          <div className="employer-name">Программа REU по комбинаторике и ИИ, Университет Мэриленда, США</div>
          <div className="job-detail">В качестве научного ассистента в программе REU по комбинаторике и ИИ 
            я исследовала задачи <strong>вычислительной геометрии</strong> в пространстве с метрикой Хилберта, включая проблему 
            минимальных охватывающих сфер. Мною было доказано, что задачи минимального радиуса в пространствах 
            Хайне-Бореля относятся к LP-типу, а также разработаны алгоритмы для метрики Хилберта и свойства расширения 
            слабых метрик. В рамках проекта я создала интерактивный визуализатор сфер Функа/Томпсона на <strong>JavaScript</strong>, 
            позволяющий наглядно демонстрировать геометрические свойства.
          </div>
        </div>
      </div>

      <div className="timeline-item">
        <div className="time-period">май 2023 - август 2023</div>
        <div className="timeline-divider">
          <div className="timeline-circle"></div>
        </div>
        <div className="job-description">
          <div className="job-title">Участник программы NASA L'Space</div>
          <div className="employer-name">Академия L'Space NASA</div>
          <div className="job-detail">В рамках программы NASA L'Space прошла интенсивное обучение по подготовке 
            конкурсных заявок под руководством главного технолога NASA. <strong>Возглавляла</strong> команду по разработке проекта, 
            успешно представила предложение экспертной комиссии NASA и дорабатывала его с учётом профессиональной обратной связи.
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Experience;
