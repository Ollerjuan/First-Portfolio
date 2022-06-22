import { Link } from "react-router-dom";
import './index.scss'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br/> I'm Juan
                {/* <img src={'https://i.imgur.com/PBrDrES.png'} alt="developer" /> */}
                 
                <br />
                A Web developer
                </h1> 
                <h2>
                    Full Stack Software Engineer
                </h2>
                <Link to='/contact' className="flat-button"> CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;