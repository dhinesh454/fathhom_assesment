import About from "../courses/About";
import Courses from "../courses/Courses";
import OnlineCourses from "../courses/OnlineCourses";
import Wrapper from "../courses/Wrapper";
import Footer from "../footer/Footer";
import NavBar from "../Navbar/NavBar";



const CoursePage = () => {
    return(
        <>
            <NavBar/>
            <Courses/>
            <About/>
            <Wrapper/>
            <OnlineCourses/>
            <Footer/>
            
        </>
    )
};


export default CoursePage;