import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import headerStyle from "../style/headerStyle.module.css"
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/userActions";

import homeLogo from "../assets/images/home-logo (1).svg"
import navHome from "../assets/images/icons/nav-home.svg"
import navNetwork from "../assets/images/icons/nav-network.svg"
import navJobs from "../assets/images/icons/nav-jobs.svg"
import navMessaging from "../assets/images/icons/nav-messaging.svg"
import navNotifications from "../assets/images/icons/nav-notifications.svg"
import navUser from "../assets/images/icons/user.svg"
import navWork from "../assets/images/icons/nav-work.svg"

const Header = () => {
    const dispatch=useDispatch()
    const{user}=useSelector(state=>state.user)
    const ref=useRef()

    function handelAddBorder(){
        ref.current.classList.add("border-primary")
    }
    function handelRemoveBorder(){
        ref.current.classList.remove("border-primary")
    }

  return (
    <header className={`shadow-sm ${headerStyle.header}`}>
            <div className="py-1 d-flex navbar container-lg px-2 px-lg-0">
                <div className="d-flex align-items-center gap-3">
                    <Link to="/home">
                    <img src={homeLogo} alt="logo"/>
                    </Link>
                    

                    <div className="input-group border rounded-3 overflow-hidden" onFocus={handelAddBorder} onBlur={handelRemoveBorder} ref={ref}>
                        <span className="input-group-text bg-light border-0" id="basic-addon1"><IoSearch/></span>
                        <input type="search" className="form-control bg-light border-0 ps-0 shadow-none" placeholder="Search" aria-label="search"/>
                    </div>

                </div>

                <ul className={`${headerStyle.nav} navbar-nav ms-auto flex-row`}>
                    <li>
                    <Link className={`nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative ${headerStyle.active}`} to="">
                        <img src={navHome} alt="icon" title="Home"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Home</span>
                        </Link>
                    </li>
                    <li>
                    <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                        <img src={navNetwork} alt="icon" title="My Network"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>My Network</span>
                        </Link>
                    </li>
                    <li>
                    <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                    <img src={navJobs} alt="icon" title="Jobs"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Jobs</span>
                        </Link>
                    </li>
                    <li>
                    <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                    <img src={navMessaging} alt="icon" title="Messaging"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Messaging</span>
                        </Link>
                    </li>
                    <li>
                    <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                        <img src={navNotifications} alt="icon" title="Notifications"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Notifications</span>
                        </Link>
                    </li>
                    <li className={`position-relative ${headerStyle.user_info}`}>
                        <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                        <img src={user?.photoURL?user.photoURL : navUser} alt="icon" className="rounded-5" style={{width:"24px",height:"24px"}} title="Me"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Me<IoMdArrowDropdown className="fs-4"/></span>
                        </Link>
                        <span className={`border ${headerStyle.signout_link}`} onClick={()=>dispatch(signOut())}>Sing out</span>
                    </li>
                    <li className="border-start d-none d-lg-block">
                    <Link className="nav-link px-2 px-sm-3 py-1 d-flex flex-column align-items-center position-relative" to="">
                        <img src={navWork} alt="icon"/>
                        <span className={`d-none d-sm-block ${headerStyle.nav_info}`}>Work<IoMdArrowDropdown className="fs-4"/></span>
                    </Link>
                    </li>
                </ul>
            </div>
    </header>
    
  )
}

export default Header