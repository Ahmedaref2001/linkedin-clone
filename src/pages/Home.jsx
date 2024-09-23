import { Link } from "react-router-dom"
import Header from "../components/Header"
import Leftside from "../components/Leftside"
import Main from "../components/Main"
import Rightside from "../components/Rightside"
import homeStyle from "../style/homeStyle.module.css"

const Home = () => {
  return (
   <>
    <Header/>
    <div className="px-2 text-center py-4">
      <p className="fw-bold"><Link to="">Hiring in a hurry? </Link> 
       -Find talented pros in record time with Upwork and keep business moving.</p>
    </div>
    <section className={`${homeStyle.main_section} row m-0 pt-0 g-4`}>
      <aside className="col-12 col-sm-5 col-md-4 col-lg-3"><Leftside/></aside>
      <article className="col-12 col-sm-7 col-md-8 col-lg-6"><Main/></article>
      <aside className="col-lg-3 d-none d-lg-block"><Rightside/></aside>
    </section>
   </>
  )
}

export default Home