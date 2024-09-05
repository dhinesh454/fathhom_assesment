import { useSelector } from "react-redux";
import profileImage from '../../store/images/Profile data-rafiki.png'
import { Card, Image } from "react-bootstrap";


const Profile = () => {
    const userProfile = useSelector((state)=>state.auth.userProfile); 
        console.log(userProfile);
        
    return(
        <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center">
           <Image className="w-25" src={profileImage}/>
           <Card style={{width:'50%',height:'25%',border:'none'}}>
                <Card.Header className="text-center">
                    <Image className="w-25" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s' roundedCircle/>
                </Card.Header>
                <Card.Body className="text-center text-info">
                    <h3>{userProfile.name}</h3>
                    <p>{userProfile.email}</p>
                </Card.Body>
           </Card>
        </div>
    )
};


export default Profile;


