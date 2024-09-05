import { Card, Form ,Row, Col ,Button} from "react-bootstrap";
import { useRef } from "react";
import classes from './Health.module.css'
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { healthAction } from "../Redux-store/healthSlice";




const ManageHealth = () => {
    const dispatch = useDispatch();
    const token = useSelector((state)=>state.auth.token);
    

    const moodref = useRef();
    const dateref = useRef();
    const notesref = useRef();

   


    const addHandler = async(event) => {
        event.preventDefault();
        const mood = moodref.current.value;
        const date = dateref.current.value;
        const notes = notesref.current.value;

        
        try {
            const response = await fetch('http://localhost:7000/api/health',{
                method:'POST',
                body:JSON.stringify({
                    mood,
                    date,
                    notes
                }),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":`${token}`
                }
            });

            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                throw new Error(`${data.message}`);
            } else {
                toast.success('Successfully Added!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                dispatch(healthAction.setHealth(data.health))
                moodref.current.value='';
                dateref.current.value='';
                notesref.current.value='';

            }
        } catch (error) {
            console.log(error);
            toast.error(`Added failed: ${error.message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };



    return (
        <div>
        
        <Card className={classes.card}>
        <ToastContainer/>
            <Form className={classes.form} onSubmit={addHandler}>
                
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold fst-italic ">Mood</Form.Label>
                        <Form.Control type="text" placeholder="Enter your mood" ref={moodref}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold fst-italic ">Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter your date" ref={dateref}/>
                       
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold fst-italic ">Notes</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={notesref} />
                       
                    </Form.Group>
                </Row>
                

                 <div className="d-flex align-items-center justify-content-center">
                    <Button style={{ width: '80%'}} type="submit">Add</Button>
                 </div>  


            </Form>
               
        </Card>
    
              
        </div>
 
    )
};

export default ManageHealth;