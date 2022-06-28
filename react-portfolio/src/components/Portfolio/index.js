import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useState} from 'react'
import portfolioData from '../../data/portfolio.json';
// import portfolio from '../../data/portfolio.json'


const Portfolio = () => {
    const [letterClass] = useState('text-animate');
    console.log(portfolioData)

     const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            
                        <div className='image-box' key={idx}>
                            <img classname="portfolio-image" src={port.cover} alt='protfolio' />
                        <>
                        <div className='content'>
                            <p classNam='title'>
                                {port.title}
                            </p>
                            <button className='button'
                                onClick={() => window.open(port.url)}>
                                    View
                            </button>
                        </div>
                        </>
                        </div>
                        
                        )
                    })
                }
            
            </div>
        )
     }       

    return (
        <div className='container portfolio-page'>
      
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            idx={15}
                    />
                </h1>
                 <div className="images">
                     <ul>
                         {/* <li>
                             <img className="proj1" src="https://user-images.githubusercontent.com/101987493/163098063-9ad6152b-05d1-4a3c-be37-bf20284390e3.png"/>
                             <img className='proj2' src="https://user-images.githubusercontent.com/89223981/166325217-5de6f18a-927c-43bf-8ab0-54a1adf498c4.png"/>       
                         </li> */}
                         <li>
                               
                        
                        </li>
                    </ul>

                 </div> 
{/* allowing the images to show up on the portfolio page  */}
              <div>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    )
}

export default Portfolio