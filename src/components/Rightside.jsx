import { Link } from "react-router-dom";
import rightsideStyle from "../style/rightsideStyle.module.css"
import { BsFillInfoSquareFill } from "react-icons/bs";
import { HiArrowSmRight } from "react-icons/hi";

import banner from "../assets/images/banner-image.jpg"

const Rightside = () => {
  return (
    <div className={rightsideStyle.right_side}>
        <div style={{backgroundColor:"white"}} className={`${rightsideStyle.pages} p-3 rounded-3 overflow-hidden`}>
            <div className="d-flex justify-content-between align-items-center text-secondary">
                <h5>Add to your feed</h5>
                <BsFillInfoSquareFill/>
            </div>

            <ul className="p-0">
                <li className="d-flex justify-content-between align-items-center py-2 my-1 border-bottom">
                    <span>#Linkedin</span>
                    <Link className="btn btn-outline-primary btn-sm rounded-4 px-3" to="">Follow</Link>
                </li>

                <li className="d-flex justify-content-between align-items-center py-2 my-1 border-bottom">
                    <span>#programing</span>
                    <Link className="btn btn-outline-primary btn-sm rounded-4 px-3" to="">Follow</Link>
                </li>

                <li className="d-flex justify-content-between align-items-center py-2 my-1 border-bottom">
                    <span>#Video</span>
                    <Link className="btn btn-outline-primary btn-sm rounded-4 px-3" to="">Follow</Link>
                </li>
            </ul>

            <Link to="">View all recommendations <HiArrowSmRight/></Link>
            
        </div>

        <div style={{backgroundColor:"white"}} className={`${rightsideStyle.box_img} p-2 rounded-3 mt-3 overflow-hidden`}>
           <img src={banner} alt="img" className="w-100 rounded-3"/>
        </div>
    </div>
  )
}

export default Rightside