import { Link } from "react-router-dom"
import leftsideStyle from "../style/leftsideStyle.module.css"
import { useSelector } from "react-redux"
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineBookmark } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

import photoIcon from "../assets/images/icons/photo-icon.svg"

const Leftside = () => {
    const {user}=useSelector(state=>state.user)
  return (
    <div className={leftsideStyle.left_side}>
        <div style={{backgroundColor:"white"}} className={`${leftsideStyle.user_info} rounded-3 overflow-hidden`}>

            <div className={`position-relative ${leftsideStyle.img_box}`}>
                <div className={leftsideStyle.bg_img}>
                    
                </div>
                <span className={`${leftsideStyle.add_photo_icon} d-flex  justify-content-center align-items-center position-absolute top-50 start-50 translate-middle`}>
                    <img src={photoIcon} alt="img"/>
                </span>
            </div>
            <div className="text-center p-2 pt-0 pb-3 border-bottom">
                <h5>Welcome, {user?.displayName?user.displayName:"Guest"}</h5>
                <Link to="">Add a photo</Link>
            </div>
            <div className={`${leftsideStyle.connection_box} d-flex justify-content-between align-items-center px-3 py-2 border-bottom`}>
                <div>
                    <p className="text-secondary m-0">Connections</p>
                    <p className="m-0 fw-bold">Grow your network</p>
                </div>
                <MdPersonAddAlt1 className="fs-4"/>
            </div>

            <div className={`${leftsideStyle.items_box} d-flex align-items-center p-3`}>
                <MdOutlineBookmark className="fs-4"/>
                <p className="m-0 fw-bold">My Items</p>
            </div>
        </div>

        <div style={{backgroundColor:"white"}} className={`${leftsideStyle.all_actions} rounded-3 mt-3 overflow-hidden`}>
            <ul className={`${leftsideStyle.list_actions} m-0 py-2 px-1 border-bottom`}>
                <li className="p-1 px-2 px-md-3 rounded-3">
                    <Link className="d-flex justify-content-between align-items-center"><span>Groups</span> <IoMdAdd/></Link>
                </li>
                <li className="p-1 px-2 px-md-3 rounded-3">
                    <Link className="d-flex justify-content-between align-items-center"><span>Events</span> <IoMdAdd/></Link>
                </li>
                <li className="p-1 px-2 px-md-3 rounded-3">
                    <Link className="d-flex justify-content-between align-items-center"><span>Follows Hashtags</span> <IoMdAdd/></Link>
                </li>
            </ul>
            <div className={`${leftsideStyle.discover_actions} px-1 py-2`}>
                <Link className="px-2 px-md-3">Discover more</Link>
            </div>
        </div>
    </div>
  )
}

export default Leftside