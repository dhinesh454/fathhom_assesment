import { Image } from 'react-bootstrap';
import image from '../store/images/Medical prescription-amico.png'
import classes from './Health.module.css';
import ManageHealth from './ManageHealth';




const Health = () => {
    return(
        <div className={classes.health}>
                <Image className='w-25' src={image}/>
            
            <div>
                <ManageHealth/>
            </div>
        </div>
    )
};


export default Health;
