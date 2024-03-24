import React from 'react'
import { motion } from 'framer-motion';

import java from '../../assets/images/skills/programming languages/java.svg'
import python from '../../assets/images/skills/programming languages/python.svg'
import c from '../../assets/images/skills/programming languages/c.svg'
import cplusplus from '../../assets/images/skills/programming languages/c++.svg'

import vscode from '../../assets/images/skills/ides/vscode.svg'
import pycharm from '../../assets/images/skills/ides/pycharm.svg'
import intellij from '../../assets/images/skills/ides/intellij.svg'
import androidstudio from '../../assets/images/skills/ides/android-studio.svg'


import mongodb from '../../assets/images/skills/mongodb.png'
import react from '../../assets/images/skills/react.png'
import nodejs from '../../assets/images/skills/node.png'
import html from '../../assets/images/skills/html.png'
import express from '../../assets/images/skills/frameworks/expressjs.svg'
import fastAPI from '../../assets/images/skills/frameworks/fastapi.svg'
import redux from '../../assets/images/skills/frameworks/redux.svg'
import tailwind from '../../assets/images/skills/frameworks/tailwindcss.svg'
import css from '../../assets/images/skills/frameworks/css.svg'
import javascript from '../../assets/images/skills/js.png'
import php from '../../assets/images/skills/php.png'
import mysql from '../../assets/images/skills/mysql.png'
import kotlin from '../../assets/images/skills/programming languages/kotlin.svg'







const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-20 border-b-[1px] border-b-black"
    >

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
      >
        <div className="w-full lgl:w-1/2">
          <div className="flex flex-col gap-4 py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px] uppercase">
              Features
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">Development Skill</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JAVA</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="relative h-full rounded-md w-[80%] bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">HTML/CSS</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">85%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">JAVASCRIPT</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">Python</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">NodeJS</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">Spring boot</p>
              <span className="inline-flex w-full h-2 mt-2 rounded-md bgOpacity">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute right-0 -top-7">75%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>

        
        <div className="w-full lgl:w-1/2">
            <div className="flex gap-4 md:flex-row boxShadow xs:flex-col">
                <div className="flex flex-col gap-4 m-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 rounded">
                  <p className="justify-center font-bold text-center md:text-base">Web/Mobile Development</p>
                  <div className="grid object-fill md:grid-rows-5 md:grid-cols-3 xs:grid-cols-2 xs:grid-rows-7">
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={mongodb} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={express} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={nodejs} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={react} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={javascript} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={react} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={redux} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={php} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={fastAPI} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={html} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={css} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={mysql} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={tailwind} alt='Java'/></div>
                    <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={kotlin} alt='Java'/></div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 m-4 bg-designColorfont-titleFont boxShadow">
                  <div className="flex flex-col gap-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 rounded"> 
                    <p className="font-bold text-center md:text-base">Programming Languages</p>
                    <div className="grid object-fill md:grid-cols-2 md:grid-rows-2 xs:grid-cols-2 xs:grid-rows-2">
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={c} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={python} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={java} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={cplusplus} alt='Java'/></div>
                    </div>

                  </div>
                  <div className="flex flex-col gap-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 rounded">
                    <p className="font-bold text-center md:text-base">Text Editors</p>
                    <div className="grid object-fill md:grid-rows-2 md:grid-cols-2 xs:grid-cols-2 xs:grid-rows-2">
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={vscode} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={intellij} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={androidstudio} alt='Java'/></div>
                      <div className='m-2 scale-75 bg-white hover:scale-100 bannerIcon'><img src={pycharm} alt='Java'/></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills