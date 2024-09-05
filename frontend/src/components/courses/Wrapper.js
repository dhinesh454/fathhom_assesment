import { Image } from "react-bootstrap";
import { awrapper } from "../../Dummydata";
import classes from './Wrapper.module.css'



const Wrapper = () => {
    const list = awrapper.map((val,index)=>
        <div className="d-flex flex-wrap gap-2" key={index}>
                <div>
                    <Image className="bg-dark" src={val.cover} alt={val.title} roundedCircle/>
                </div>
                <div>
                    <h1 className="fs-3">{val.data}</h1>
                    <h3 className="fs-5">{val.title}</h3>
                </div>
        </div>
    )
   return(
        <section className={classes.wrapper}>
            {list}
        </section>
   )
};

export default Wrapper;