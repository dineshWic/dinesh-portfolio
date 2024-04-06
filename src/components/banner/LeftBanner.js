import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Full Stack Developer.", "Mobile Application Developer.","Backend Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="flex flex-col w-full gap-20 lgl:w-1/2">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal ">WELCOME</h4>
        <h1 className="font-bold text-white md:text-6xl sml:text-5xl xs:text-3xl">
          Hi, I'm <span className="capitalize text-designColor">Dinesh Wickramasinghe</span>
        </h1>
        <h2 className="font-bold text-white md:text-4xl sml:text-2xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base leading-6 tracking-wide font-bodyFont">
          I'm a Software Developer, who is curious to learn new technologies and one who is thirst for knowledge. I love to create attractive and functional web and mobile applications as solutions to give the best user experience.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner