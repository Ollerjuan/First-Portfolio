import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {


    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
              
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


        </div>
    )
}

export default About; 