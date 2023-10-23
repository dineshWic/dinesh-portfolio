import React from 'react'
import { FaLinkedinIn,FaGithub,FaFacebook, FaDownload } from "react-icons/fa";

import cvFile from '../../assets/cv.pdf'; 

const Media = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.target = '_blank';
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div className="flex flex-col justify-between gap-6 xl:flex-row lgl:gap-0">
      <div>
{        /*<h2 className="mb-4 text-base uppercase font-titleFont">
          Find me in
        </h2>*/}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/dinesh.wickramasinghe.7549?mibextid=ZbWKwL" className="bannerIcon">
            <FaFacebook />
          </a>
          <a href="https://github.com/dineshWic" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/dinesh-wickramasinghe" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
{        /*<h2 className="px-4 mb-4 text-base uppercase font-titleFont">
          Download CV
  </h2>*/}
        <div className="flex-row justify-center gap-4">
          <button
            className="inline-flex px-4 py-2 mb-4 text-base font-bold text-white uppercase rounded w-[200px] bannerIcon"
            onClick={handleDownloadCV}
          >
            <span className='mx-2'>Download CV</span><FaDownload />
          </button>
        </div>
      </div>

    </div>
  );
};


export default Media