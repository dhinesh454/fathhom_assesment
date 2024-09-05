import React, {  useRef } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";
import classes from './UserRegistration.module.css';
import { Link,useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { authActions } from "../../Redux-store/authSlice";
import image from '../../store/images/Tablet login-cuate.png';
import { decodeToken } from "../../services.js/Services";




const Login = () => {
   const dispatch = useDispatch();


    
    const history = useHistory();
    const emailidRef = useRef();
    const passwordRef = useRef();

    const loginHandler = async(event) => {
        event.preventDefault();
        const email = emailidRef.current.value;
        const password = passwordRef.current.value;
  
        
        try {
            const response = await fetch('http://localhost:7000/api/login',{
                method:'POST',
                body:JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                throw new Error(`${data.message}`);
            } else {
                dispatch(authActions.loginHandler({token:data.token}))
                dispatch(authActions.setProfile(decodeToken(data.token)))
                toast.success('Successfully login!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

               
                setTimeout(() => {
                    history.push('/courses');
                }, 3000);
            }
        } catch (error) {
            console.log(error);
            toast.error(`Login failed: ${error.message}`, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };




    return(
        <div className={classes.background}>
        <ToastContainer/>
        <Image src={image} className="w-50"/>
        <Card className={classes.card}>
            <Form style={{width:'20rem'}} className='m-1 p-2' onSubmit={loginHandler}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold fst-italic ">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" ref={emailidRef}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold fst-italic ">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" ref={passwordRef}/>
                       
                    </Form.Group>
                </Row>
                

                 <div className={`${classes.button} d-flex text-center justify-content-center`}>
                    <Button  type="submit">Login</Button>
                 </div>  


            </Form>
            <div className={classes.toogle}>
            <Link className="text-decoration-none" to="/register">New User?...Register here</Link>
            </div>
        </Card>


       
        </div>
    )
};


export default Login;