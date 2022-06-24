import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faGithub,
    faNodeJs,
  } from '@fortawesome/free-brands-svg-icons'

<i class="fa-brands fa-github"></i> 

const About = () => {
    const [letterClass] = useState('text-animate')

   
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role 
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually 
          </p>
          <p>
            If I need to define myself in one sentence that would be 
          </p>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EFD81D" />
            </div>
            <div className="face7">
              <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
            </div>
          </div>
        </div>

        </div>
    )
}

export default About; 



