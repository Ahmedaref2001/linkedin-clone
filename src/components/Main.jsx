import { useEffect, useState } from "react"
import AddPost from "./AddPost"
import PostModal from "./PostModal"
import PostsList from "./PostsList"
import { useDispatch, useSelector } from "react-redux"
import { getPostsAPI } from "../store/actions/articleActions"

import loader from "../assets/images/loader.svg"

const Main = () => {
const[showModal,setShowModal]=useState(false)
const dispatch=useDispatch()
const {loading,articles}=useSelector(state=>state.article)

useEffect(()=>{
  dispatch(getPostsAPI())
},[dispatch])

  return (
    <>
      {showModal&&<PostModal setShowModal={setShowModal}/>}

      <AddPost setShowModal={setShowModal}/>
      <div className="text-center">
        {
          loading&&<img src={loader} alt="loder" style={{width:"80px"}}/>
        }
      </div>
      <PostsList postsData={articles}/>
    </>
  )
}

export default Main