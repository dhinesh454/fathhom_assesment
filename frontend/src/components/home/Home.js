import { Button, Container, Row} from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import classes from './Home.module.css'
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
          
            <section className={classes.home}>
                <Container>
                    <Row>
                    <Heading subtitle='WELCOME TO FATHHOM MARITIME' title='Best Online Education Expertise' />
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </Row>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <Button as={Link} to='/login' variant="outline-light text-light bg-info" className="">GET STARTED NOW <span><FaLongArrowAltRight /></span></Button>
                        <Button variant="outline-light text-light bg-info">REQUEST DEMO <span><MdOndemandVideo /></span> </Button>
                    </div>
            
                </Container>
            </section>
        </>
    )
};


export default Home ;

