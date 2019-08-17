import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component} from "react"
import './menu.css'
import { FaBars, FaFolderOpen, FaPhone } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Backdrop from './backdrop'




class Menu extends Component {

  state = {
      show: false
    }



    menuAppearsHandler = () => {
      this.setState({show: true})
    }

    iconeAppearsHandler = () =>{
      this.setState({show: false})
    }

render() {


  let menuIcone = <div className="menuSmall" onClick={this.menuAppearsHandler}>
    <div className="menu-svg">
      <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="22.0935" y2="1" stroke="white" stroke-width="2"/>
<line y1="8.92944" x2="22.0935" y2="8.92944" stroke="white" stroke-width="2"/>
<line y1="17" x2="22.0935" y2="17" stroke="white" stroke-width="2"/>
</svg>


    </div>
           </div>

  let menu =
      <div className="menu"
      style ={{
        right: this.state.show ? '-10px' : '-300px',
        opacity: this.state.show ? '1' : 'O '
      }}>

      <Link to="/"> <p> ACCUEIL <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg> </p> </Link>
            <Link to="/lecabinet/"> <p> LE CABINET <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg> </p> </Link>
            <Link to="/domaines-d-expertise"> <p> DOMAINES D'EXPERTISES <svg className="polygon" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4L0.669823 0.5H9.33008L5 4Z" fill="white"/>
</svg> </p> </Link>
<div className="ppetit">
              <Link to="/indemnisation-des-victimes/" > <p style={{ fontWeight: `100`}}  >  INDEMNISATION DES VICTIMES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
              <Link to="/defense-des-salaries/" > <p style={{ fontWeight: `100`}}  >  DÉFENSE DES SALARIÉS <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
              <Link to="/defense-des-personnes-malades-handicap/" > <p style={{ fontWeight: `100`}} >  DÉFENSE DES MALADES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
</div>
            <Link to="/noshonoraires/"> <p>NOS HONORAIRES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
            <Link to="/posts/">  <p> NOS PUBLICATIONS <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
 <Link to="/liens-utiles/"> <p> NOS INFOS ET CONSEILS PRATIQUES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
<div className="ppetit">
              <Link to="/conseils-pratiques/" > <p style={{ fontWeight: `100`}}  >  CONSEILS PRATIQUES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
              <Link to="/infos-pratiques/" > <p style={{ fontWeight: `100`}}  >  INFOS PRATIQUES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
              <Link to="/modeles-et-formulaires/" > <p style={{ fontWeight: `100`}} >  MODÈLES ET FORMULAIRES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
<Link to="/liens-utiles/" > <p style={{ fontWeight: `100`}} >  LIENS UTILES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>  </p> </Link>
</div>
            <Link to="/contact/"> <p>  CONTACT ET ACCÈS <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="white"/>
</svg>   </p> </Link>


            <p className="close"onClick={this.iconeAppearsHandler} >
              <svg id="cross" width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="23.9244" y1="63.3012" x2="74.8046" y2="10.9543" stroke="white" stroke-width="3"/>
              <line x1="24.023" y1="12.903" x2="77.4122" y2="62.6885" stroke="white" stroke-width="3"/>
            </svg>
            </p>
            </div>


  let svg1 = <svg id="svg"  viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<line  x1="14" y1="15.5" x2="87" y2="15.5" stroke="black" stroke-width="3"/>
<line  x1="14" y1="38.5" x2="87" y2="38.5" stroke="black" stroke-width="3"/>
<line  x1="14" y1="61.5" x2="87" y2="61.5" stroke="black" stroke-width="3"/>
</svg>

let line1 = <svg className="line1" width="389" height="289" viewBox="0 0 389 289" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="76" y1="90.5" x2="268" y2="90.5" stroke="black" stroke-width="3"/>
</svg>





  return (
    <div >
    <Backdrop show={this.state.show} clicked={this.iconeAppearsHandler}/>
    {menuIcone}
    {menu}
    </div>

    )
}
}





export default Menu;
