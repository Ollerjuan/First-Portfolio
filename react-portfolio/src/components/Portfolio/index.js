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
                        {/* title letter are animated */}
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            idx={15}
                    />
                </h1> 
{/* allowing the images to show up on the portfolio page  */}
              <div>{renderPortfolio(portfolioData.portfolio)}</div>
    </div>
    )
}

export default Portfolio