import { MdMoreHoriz } from "react-icons/md";
import postStyle from "../style/postStyle.module.css"
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

import userIcon from "../assets/images/icons/user.svg"

import commentIcon from "../assets/images/icons/comment-icon.svg"
import shareIcon from "../assets/images/icons/share-icon.svg"
import likeIcon from "../assets/images/icons/like-icon.svg"
import sendIcon from "../assets/images/icons/send-icon.svg"

const Post = ({data}) => {
  return (
    <div className={`p-2 p-lg-3 mt-2 rounded-3 ${postStyle.post_box}`}>
        <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <img src={data.actor.image?data.actor.image:userIcon} alt="img" className={postStyle.user_img}/>
                <div>
                    <p className={`m-0 lh-sm ${postStyle.user_name}`} title="Ahmed Aref">{data.actor.name?data.actor.name:null}</p>
                    <p className={`text-secondary m-0 lh-sm ${postStyle.user_email}`} title="ahmed@gmail.com">{data.actor.email?data.actor.email:null}</p>
                    <p className={`text-secondary m-0 lh-sm ${postStyle.post_date}`}>{data.actor.date?data.actor.date.toDate().toLocaleDateString():null}</p>
                </div>
            </div>
            <span className={`${postStyle.more_icon_box} d-flex justify-content-center align-items-center`}>
                <MdMoreHoriz className={postStyle.more_icon}/>
            </span>
        </div>

        <div className="my-2 border-bottom pb-2">
            <p className="text-break my-3">{data.description?data.description:null}</p>
            {
                data.imgURL?<div className={postStyle.post_img}>
                    <img src={data.imgURL} alt="post-img" className="w-100 rounded-3"/>
                </div>
                :data.video?
                <ReactPlayer width={"100%"} height={"350px"} url={data.video} />
                :null
            }
            

            <div className={`${postStyle.Interactions} d-flex gap-2 mt-2 p-1`}>
                <span>80 like</span>
                <span>15 comments</span>
                <span>20 share</span>
            </div>
        </div>
        
        <ul className="d-flex justify-content-start justify-content-md-evenly align-items-center flex-wrap m-0 p-0 mt-2">
            <li className={`${postStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={likeIcon} alt="icon"/>
                    <span>Like</span>
                </Link>
            </li>

            <li className={`${postStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={commentIcon} alt="icon"/>
                    <span>Comment</span>
                </Link>
            </li>

            <li className={`${postStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={shareIcon} alt="icon"/>
                    <span>Share</span>
                </Link>
            </li>

            <li className={`${postStyle.list_item} rounded-3`}>
                <Link to="" className="px-3 py-2 d-flex align-items-center gap-1">
                    <img src={sendIcon} alt="icon"/>
                    <span>Send</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Post