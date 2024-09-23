import { useDispatch, useSelector } from "react-redux";
import postModalStyle from "../style/postModalStyle.module.css"
import { IoCloseSharp } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";
import { useState } from "react";
import {Timestamp} from "firebase/firestore"
import ReactPlayer from "react-player";
import { addPostAPI } from "../store/actions/articleActions";

import userIcon from "../assets/images/icons/user.svg"
import shareCommentIcon from "../assets/images/icons/share-comment.svg"
import shareImageIcon from "../assets/images/icons/share-image.svg"
import shareVideoIcon from "../assets/images/icons/share-video.svg"

const PostModal = ({setShowModal}) => {
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.user)
    const[postText,setPostText]=useState("")
    const[postType,setPostType]=useState("")
    const[videoUrl,setVideoUrl]=useState("")
    const[imgUrl,setImgUrl]=useState("")

    function handelAddPost(){
        const data={
            image:imgUrl,
            description:postText,
            video:videoUrl,
            user:user,
            timestamp:Timestamp.now()
        }
        dispatch(addPostAPI(data))
        setShowModal(false)
    }
  return (
    <>
        <div className={postModalStyle.overlay} onClick={()=>setShowModal(false)}></div>

        <div className={postModalStyle.modal}>
            <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                <p className="text-secondary m-0 fs-5">Create a post</p>
                <IoCloseSharp className={`${postModalStyle.close_btn}`} onClick={()=>setShowModal(false)}/>
            </div>

            <div className="d-flex gap-2 align-items-center p-3 pb-0">
                <img src={user?.photoURL?user.photoURL : userIcon} alt="userImg" className={postModalStyle.user_img}/>
                <p className={postModalStyle.user_name}>{user?.displayName?user.displayName:"Guest"}</p>
            </div>

            <div className="p-2 p-md-3">
                <textarea className={`${postModalStyle.textarea} form-control shadow-none border-0`} placeholder="what do you want to talk about?" value={postText} onChange={(e)=>setPostText(e.target.value)}></textarea>
            </div>

            <div className="px-3">
                {
                    postType==="image"?
                    <div>
                    {
                        !imgUrl?<div className="text-center">
                            <input type="file" id="imgFile" onChange={(e)=>setImgUrl(e.target.files[0])} className="d-none"/>
                            <label htmlFor="imgFile" className="fw-bold" style={{cursor:"pointer"}}><RiImageAddFill className="fs-1"/></label>
                        </div>
                        :null
                    }
                    {imgUrl&&<div className="text-end">
                        <IoCloseSharp className={`${postModalStyle.close_btn}`} onClick={()=>setImgUrl("")}/>
                        <img src={URL.createObjectURL(imgUrl)} alt="img" className="w-100 rounded-3"/>
                    </div>
                    }
                    </div>

                    :postType==="video"?
                    <div>
                        <input type="text" className="form-control shadow-none mb-2" placeholder="Please enter video url" value={videoUrl} onChange={(e)=>setVideoUrl(e.target.value)}/>
                        {
                            videoUrl&&<ReactPlayer width={"100%"} url={videoUrl} />
                        }
                    </div>

                    :null
                }
            </div>

            <div className="d-flex justify-content-between align-items-center p-2 p-lg-3">
                <div className="d-flex gap-2 align-items-center">
                    <div className="d-flex border-end gap-2 pe-2">

                        <span className={`${postModalStyle.post_type} d-flex justify-content-center align-items-center rounded-5`} style={{width:"37px",height:"37px"}} onClick={()=>{setPostType("image");setVideoUrl("")}}>
                            <img src={shareImageIcon} alt="icon"/>
                        </span>

                        <span className={`${postModalStyle.post_type} d-flex justify-content-center align-items-center rounded-5`} style={{width:"37px",height:"37px"}} onClick={()=>{setPostType("video");setImgUrl("")}}>
                            <img src={shareVideoIcon} alt="icon"/>
                        </span>

                    </div>

                    <span className={`${postModalStyle.post_type} rounded-5 d-flex gap-1 align-items-center px-2 py-1`} onClick={()=>{setPostType("");setImgUrl("");setVideoUrl("")}}>
                        <img src={shareCommentIcon} alt="icon"/>
                        <span>Anyone</span>
                    </span>

                </div>

                <button className={`${(!postText&&!videoUrl&&!imgUrl)?postModalStyle.disabled:"btn btn-outline-primary"} btn-sm px-3 rounded-4`} disabled={!postText&&!videoUrl&&!imgUrl} onClick={handelAddPost}>Post</button>
            </div>
        </div>
    </>
    
  )
}

export default PostModal