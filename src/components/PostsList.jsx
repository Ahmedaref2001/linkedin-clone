import Post from "./Post"


const PostsList = ({postsData}) => {
  return (
    <div className="mt-4">
    {
      postsData.map((ele,index)=>(
        <Post data={ele} key={index}/>
      ))
    }
        
    </div>
  )
}

export default PostsList