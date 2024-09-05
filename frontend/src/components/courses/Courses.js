import classes from './Courses.module.css';
import { coursesCard } from '../../Dummydata';
import { Image, Card, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

const Courses = () => {
  const profilename = useSelector((state)=>state.auth.userProfile.name)
  const courseList = coursesCard.map((val, index) => (
    <Card className={classes.card} key={index}>
      <div>
        <div className={classes.heading}>
          <Image className='w-25 bg-info' src={val.cover} roundedCircle />
          <Card.Text className='fw-bold fst-italic '>{val.coursesName}</Card.Text>
        </div>
        <div className={classes.star}>
          <span className='text-info'><FaStar /></span>
          <span className='text-info'><FaStar /></span>
          <span className='text-info'><FaStar /></span>
          <span className='text-info'><FaStar /></span>
          <span className='text-info'><FaStar /></span>
          <label className='text-info'>(5.0)</label>
        </div>
        <div className={classes.detail}>
          {val.courTeacher.map((details, index) => (
            <div key={index}>
              <div className={classes.dimg}>
                <Image src={details.dcover} alt='' />
                <p className='fst-italic fs-6 text-success'>{details.name}</p>
              </div>
              <span className='fw-light'>{details.totalTime}</span>
            </div>
          ))}
        </div>
        <div className='my-2'>
          <p>
            {val.priceAll}/{val.pricePer}
          </p>
        </div>
        <Button variant="outline-light text-light bg-info" className={classes.button}>
          Enroll Now
        </Button>
      </div>
    </Card>
  ));

  return (
    <div className='p-2 mx-2'>
    <div className='d-flex flex-wrap justify-content-between align-items-center '>
    <p className='text-info'>Welcome to Fathhome Maritime Learning Portal!..</p>
      <h3 className='text-info fst-italic '>{profilename}</h3>
    </div>
      <div className={classes.background}>
          <h1>Explore Online Courses</h1>
      </div>
     
      <div className={classes.container}>
        {courseList}
      </div>
    </div>
  );
};

export default Courses;
