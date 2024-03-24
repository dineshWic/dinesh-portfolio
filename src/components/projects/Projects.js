import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive, projectSix, projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="MARK ASSIST"
          des=" 
          The third-year group project at UCSC, where an all-in-one solution was
           implemented for marking, analysing, grading and ranking exam papers 
           using Machine Learning (OpenCV). The similarity of the answer to the
            question is captured using OpenAI API.

      "
          src={projectOne}
          git = "https://github.com/DinithKumudika/MarkAssist.git"
        />
        <ProjectsCard
          title="Audexlk "
          des=" 
          A web application where music related service providers and buyers 
          can collaborate. The service providers can switch to a buyer and 
          vice versa. The system acts as a platform to sell and buy goods 
          directly or to hold auctions.

      "
          src={projectTwo}
          git = "https://github.com/TharinduEpaz/Audex.git"
        />
        <ProjectsCard
          title=" SOCIAL MEDIA APP"
          des=" Social Media App is a Full stack (MERN) application. This application allows users to authenticate themselves on the site and enables users to interact with each other by sharing posts, liking content, and engaging in discussions through comments."
          src={projectThree}
          git = "https://github.com/dineshWic/social-media-app.git"
        />
        <ProjectsCard
          title="FEEDBACK APP"
          des=" Feedback app allows users to submit detailed reviews along with a corresponding rating. By providing a platform for open feedback, users can contribute their insights, helping to improve products and services."
          src={projectFour}
          git = "https://github.com/dineshWic/feedback-app.git"
        />
        <ProjectsCard
          title="Weather App"
          des=" A simple weather app, that enables users to effortlessly access real-time weather updates for their desired cities. The app's output includes the current temperature, displayed in Celsius, along with a brief description of the weather conditions. "
          src={projectFive}
          git = "https://github.com/dineshWic/Weather-App.git"
        />
        <ProjectsCard
          title="Todo List App"
          des=" Todo List App allows users to seamlessly add new tasks by simply typing and clicking the plus button. Additionally, users can effortlessly remove completed tasks by clicking on them."
          src={projectSix}
          git = "https://github.com/dineshWic/todolist-v2.git"
        />
        <ProjectsCard
         title="EcomPulse"
         des=" EcomPulse is a spring boot microservice project which is an initiative for an e-commerce application. This application allows users to order products and also send notifications about the order."
         src={projectSeven}
         git = "https://github.com/dineshWic/todolist-v2.git"
       />
      </div>
    </section>
  );
}

export default Projects