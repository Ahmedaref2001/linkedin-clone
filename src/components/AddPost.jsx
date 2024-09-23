import { useSelector } from "react-redux"
import addPostStyle from "../style/addPostStyle.module.css"
import { Link } from "react-router-dom"

import userIcon from "../assets/images/icons/user.svg"
import photoIcon from "../assets/images/icons/photo-icon.svg"
import videoIcon from "../assets/images/icons/video-icon.svg"
import eventIcon from "../assets/images/icons/event-icon.svg"
import articleIcon from "../assets/images/icons/article-icon.svg"


const AddPost = ({setShowModal}) => {

    const {user}=useSelector(state=>state.user)
    const {loading}=useSelector(state=>state.article)

  return (
    <div className={`rounded-3 py-2 ${addPostStyle.add_post_box}`} style={{backgroundColor:"white"}}>
        <div className="d-flex gap-2 align-items-center px-2 p-md-3">
            <img src={user?.photoURL?user.photoURL : userIcon} alt="userImg" className={addPostStyle.user_img}/>
            <button className={`flex-grow-1 text-start px-3 py-2 rounded-5 ${addPostStyle.add_post_btn}`} disabled={loading} onClick={()=>setShowModal(true)}>Start a new post</button>
        </div>

        <ul className="d-flex justify-content-start justify-content-md-evenly align-items-center flex-wrap m-0 p-0 mt-4">
            <li className={`${addPostStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={photoIcon} alt="icon"/>
                    Photo
                </Link>
            </li>

            <li className={`${addPostStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={videoIcon} alt="icon"/>
                    Video
                </Link>
            </li>

            <li className={`${addPostStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={eventIcon} alt="icon"/>
                    Event
                </Link>
            </li>

            <li className={`${addPostStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={articleIcon} alt="icon"/>
                    Write article
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default AddPost