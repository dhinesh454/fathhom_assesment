import { Image } from "react-bootstrap";
import { homeAbout } from "../../Dummydata";
import image from '../../store/images/about.webp';
import classes from './About.module.css';

const About = () => {
    let homeList = homeAbout.map((val, index) => 
        <div className={classes.homeItem} key={index}>
            <div>
                <Image className="bg-info" src={val.cover} roundedCircle />
            </div>
            <div>
                <h2>{val.title}</h2>
                <p>{val.desc}</p>
            </div>
        </div>
    );

    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <Image className={classes.aboutimg} src={image} />
            </div>
            <div className={classes.homeList}>
                <h4 className="text-info fs-5">LEARN ANYTHING</h4>
                <h2>Benefits About Online Learning Expertise</h2>
            
                {homeList}
            </div>
        </div>
    );
};

export default About;
