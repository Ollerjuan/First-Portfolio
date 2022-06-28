import { Link } from "react-router-dom";
import './index.scss'
import React, { useState } from 'react'
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";

const Home = () => {
    const [ letterClass] = useState ('text-animate')
    const nameArray = [' ','J','u','a','n']
    const jobArray = ['A',' ','W','e','b',' ','d','e','v','e','l','o','p','e','r',]

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
    
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
                <br />
                <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              // idx controls the animation order to show 
              idx={21}/>
               
                </h1> 
                <h2>
                    Full Stack Software Engineer
                </h2>
                <Link to='/contact' className="flat-button"> CONTACT ME</Link>
                <div className="download-link">
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1oMySp0zVcY4K49f7Hhrvvz0srkCTsEGN/view?ts=62bb72e7">Resume</a>
                </div>
            </div>
            <Logo />
        </div>
    )
}

export default Home;