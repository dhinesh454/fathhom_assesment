import classes from './OnlineCourses.module.css';
import { online } from '../../Dummydata';
import { Card, Image } from 'react-bootstrap';

const OnlineCourses = () => {
    const onlinecourse = online.map(val => (
        <Card className={classes.card} key={val.courseName}>
            <Image className="w-75 m-auto" src={val.cover} alt={val.courseName} />
            <p>{val.courseName}</p>
            <span>{val.course}</span>
        </Card>
    ));

    return (
        <section >
            <div className='text-center my-5'>
                <p className='text-info fs-4 fw-bold fst-italic'>Courses</p>
                <h3 className='fs-2 fst-italic'>Browse Our Online Courses</h3>
            </div>
            <div className={classes.onlinecourse}>
                {onlinecourse}
            </div>
            
        </section>
    );
};

export default OnlineCourses;
