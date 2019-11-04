import React from "react"
import { Link } from "gatsby"
import '../components/contact.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../components/footer.css'
import '../components/motsclefs.css'

const MotsClefs= (props) => (

    <div className="motsclefs">


    <p className="desc-s">

<p className="desc-s"> NOTIONS CLEFS </p>



 <span className= "bold" >  {props.link1} </span> -
 <span className= "bold" >  {props.link2}</span> -
  <span className= "bold" > {props.link3}</span> -
 <span className= "bold" >  {props.link4} </span>
  <span className= "bold" >  {props.link5} </span>

</p>

    </div>
)


export default MotsClefs
