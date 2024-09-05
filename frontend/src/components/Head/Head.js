import classes from './Head.module.css'
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FiYoutube } from "react-icons/fi";
import { Image } from 'react-bootstrap';
const Head = () => {
return(
    <>
        <section className={`my-3 ${classes.head}`}>
            <div className='d-flex justify-content-between align-items-center mx-2'>
            <div className='d-flex flex-column'>
           
           <h1 className='fst-italic fw-bold text-success'>
           <span><Image src="https://cdn-icons-png.flaticon.com/512/3412/3412718.png" alt="Logo" width={30} height={30} className="me-2" />
           </span> FATHHOM MARITIME</h1>
                <span className='fst-italic fe-bold text-light'>ONLINE LEARNING MANAGEMENT PLATFORM</span>
            </div>
            <div className='d-flex flex-wrap gap-4'>
                <i className='text-primary'><RiFacebookCircleLine /></i>
                <i className='text-warning'><BsInstagram /></i>
                <i><RiTwitterXLine /></i>
                <i className='text-danger'><FiYoutube /></i>
            </div>
            </div>
        </section>
    </>
)
};

export default Head;
