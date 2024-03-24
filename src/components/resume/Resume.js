import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
// import Skills from './Skills';
// import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
  //  const [skillData, setSkillData] = useState(false);
   const [experienceData, setExperienceData] = useState(false);
  //  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex items-center justify-center text-center">
        <Title title="CS Undergraduate" des="My Resume" />
      </div>
      <div>
        <ul className="grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
          onClick={() =>
            setEducationData(false) &
            setExperienceData(true)
          }
          className={`${
            experienceData
              ? "border-designColor rounded-lg"
              : "border-transparent"
          } resumeLi`}
        >
          Experience
        </li>
        </ul>
      </div>
      {educationData && <Education />}
      {experienceData && <Experience />}

 
    </section>
  );
}

export default Resume