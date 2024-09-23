import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginStyle from "../style/loginStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/actions/userActions";
import { useEffect } from "react";

import googleIcon from "../assets/images/google.svg"
import loginHeroIcon from "../assets/images/login-hero.svg"
import loginLogoIcon from "../assets/images/login-logo.svg"

const Login = () => {
  const dispatch = useDispatch();
  const { user,loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/home";

  const handleSignIn = () => {
    dispatch(signIn());
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    !loading&&<div>
      <div className={`container-fluid d-flex py-3 flex-wrap gap-3 justify-content-between ${loginStyle.nav}`}>
        <img src={loginLogoIcon} alt="logo" style={{ width: "130px" }} />
        <div className={`d-flex gap-2 justify-content-between justify-content-sm-center ${loginStyle.nav_links}`}>
          <Link to="/join"><Button variant="light" className="rounded-5 px-4">Join now</Button></Link>
          <Link to="/signin"><Button variant="outline-primary" className="rounded-5 px-4">Sign in</Button></Link>
        </div>
      </div>
      <section className={`container ${loginStyle.hero_section}`}>
        <div className={`d-flex position-relative mt-5 ${loginStyle.hero_info_text}`}>
          <h1>Welcome to your professional community</h1>
          <img src={loginHeroIcon} alt="img" />
        </div>
        <Button variant="light" className="rounded-5 px-5 border border-dark my-4" onClick={handleSignIn}>
          <img src={googleIcon} alt="" /> Sign in with Google
        </Button>
      </section>
    </div>
  );
};

export default Login;
