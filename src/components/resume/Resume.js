import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
// import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
  //  const [skillData, setSkillData] = useState(false);
  //  const [experienceData, setExperienceData] = useState(false);
  //  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CS Undergraduate" des="My Resume" />
      </div>
      <div>
        <ul className="grid w-full grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <li
            onClick={() =>
              setEducationData(true) 
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          
        </ul>
      </div>
      {educationData && <Education />}

 
    </section>
  );
}

export default Resume