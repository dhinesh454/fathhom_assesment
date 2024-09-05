import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import libraryIcon from '../../store/icons/library.png';
import healthIcon from '../../store/icons/healthcare.png';
import profileIcon from '../../store/icons/profile.png';
import logoutIcon from '../../store/icons/logout.png';
import singupIcon from '../../store/icons/add-friend.png';
import loginIcon from '../../store/icons/login.png'
import classes from './NavBar.module.css';
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../../Redux-store/authSlice";

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isLogin = useSelector((state)=>state.auth.isloggedIn);
  

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(authActions.logoutHandler());
    history.push('/login')

  };

  return (
    <Navbar expand="lg" className={classes.navbar} variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className={classes["navbar-brand"]}>
          <Image src="https://cdn-icons-png.flaticon.com/512/3412/3412718.png" alt="Logo" width={30} height={30} className="me-2" />
          Fathhome Maritime
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes["navbar-toggler"]} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-4">
          {!isLogin && <Nav.Link as={Link} to="/login" className={classes["nav-link"]}>
              <Image src={loginIcon} alt="Courses" width={20} height={20} className="me-2" />
             Login
            </Nav.Link>}
            {!isLogin && <Nav.Link as={Link} to="/register" className={classes["nav-link"]}>
              <Image src={singupIcon} alt="Courses" width={20} height={20} className="me-2" />
             Signup
            </Nav.Link>}
           {isLogin &&  <Nav.Link as={Link} to="/courses" className={classes["nav-link"]}>
              <Image src={libraryIcon} alt="Courses" width={20} height={20} className="me-2" />
             Courses
            </Nav.Link>}
            {isLogin && <Nav.Link as={Link} to="/health" className={classes["nav-link"]}>
              <Image src={healthIcon} alt="Health" width={20} height={20} className="me-2" />
              Manage Health
            </Nav.Link>}
            {isLogin && <Nav.Link as={Link} to="/profile" className={classes["nav-link"]}>
              <Image src={profileIcon} alt="Profile" width={20} height={18} className="me-2" />
              Profile
            </Nav.Link>}
            {isLogin && <Nav.Link  className={classes["nav-link"]} onClick={logoutHandler}>
              <Image src={logoutIcon} alt="Logout" width={20} height={20} className="me-2" />
              Logout
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
