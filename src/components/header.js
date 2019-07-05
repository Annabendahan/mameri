import { NavLink, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import pic1 from '../images/Qmameri_cmjn.png';
import Menu from './menu.js'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,

       boxShadow: `0px 4px 20px rgba(189, 188, 188, 0.25)`,
       position: `fixed`,
       width: `100%`,
       zIndex: 15

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        fontSize: `.7rem`,
        paddingTop: `.7rem`,
        paddingLeft: `1.4rem`,
        display: `flex`,
        justifyContent: `space-between`,
        height: `90px`

      }}
    >



        <Link
          to="/"

          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
          }}
        >
          <img  src={pic1} className="logo" alt="fireSpot" />
        </Link>


        <div className='onglets'>
        <Link
          to="/lecabinet/"
          className="ong"
          activeClassName="active"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`,


          }}
        >
          LE CABINET
        </Link>



        <Link
          to="/domaines-d-expertise/"
          className="de "
          activeClassName="active"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`,
            position: `relative`
          }}
        >
          DOMAINES D'EXPERTISE <svg className="polygon" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4L0.669823 0.5H9.33008L5 4Z" fill="#244C82"/>
</svg>


          <span className="so sub-onglet">  <Link to="/indemnisation-des-victimes/" > INDEMNISATION DES VICTIMES <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="#244C82"/>
</svg>
 </Link> </span>
          <span className="so sub-onglet2">  <Link to= "/defense-des-salaries/"> DÉFENSE DES SALARIÉS <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="#244C82"/>
</svg>
 </Link> </span>
          <span className="so sub-onglet3">  <Link to= "/defense-des-personnes-malades-handicap/" > DÉFENSE DES PERSONNES MALADES ET EN SITUATION DE HANDICAP <svg width="5" height="7" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z" fill="#244C82"/>
</svg>
 </Link> </span>


                  </Link>

          <span> </span>


           <Link
          to="/noshonoraires/"
          activeClassName="active"
          className="ong"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`
          }}
        >
          NOS HONORAIRES
        </Link>




        <Link
          to="/posts/"
          activeClassName="active"
          className="ong"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`
          }}
        >
          NOS PUBLICATIONS
        </Link>

        <Link
          to="/contact/"
          activeClassName="active"
          className="ong"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`
          }}
        >
          CONTACT
        </Link>





        <Link
          to="/liens-utiles/"
          activeClassName="active"
          className="ong"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`
          }}
        >
          LIENS UTILES
        </Link>



        </div>







    </div>
< Menu />

          <p className="number top"> <svg className="yellows" width="14" height="14" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.9876 20.519C26.0427 20.9414 25.9141 21.3086 25.6023 21.6207L21.9415 25.2562C21.7764 25.4398 21.5608 25.596 21.2947 25.7244C21.0287 25.853 20.7672 25.9356 20.5104 25.9723C20.4921 25.9723 20.4369 25.977 20.3451 25.9862C20.2535 25.9953 20.1342 26 19.9874 26C19.6387 26 19.0744 25.9403 18.2945 25.8209C17.5147 25.7015 16.5605 25.4077 15.4321 24.9396C14.3035 24.4714 13.0236 23.7689 11.5924 22.8326C10.1612 21.8963 8.63811 20.6109 7.02335 18.9767C5.73888 17.7097 4.6746 16.4979 3.83052 15.3411C2.98644 14.1843 2.30751 13.1147 1.79372 12.1324C1.27988 11.1501 0.894542 10.2595 0.637648 9.46079C0.380754 8.66206 0.206433 7.9735 0.114685 7.39511C0.022937 6.81672 -0.0137622 6.36228 0.0045874 6.03177C0.022937 5.70126 0.0321118 5.51765 0.0321118 5.48092C0.068811 5.22386 0.151384 4.96221 0.279831 4.69597C0.408278 4.42972 0.56425 4.21398 0.747746 4.04872L4.40849 0.385593C4.66538 0.128531 4.95898 0 5.28927 0C5.52781 0 5.73883 0.0688558 5.92233 0.206567C6.10583 0.344279 6.2618 0.514123 6.39024 0.7161L9.33535 6.30719C9.5005 6.60098 9.54637 6.9223 9.47298 7.27117C9.39958 7.62004 9.24361 7.91383 9.00506 8.15253L7.65637 9.5021C7.61967 9.53882 7.58755 9.5985 7.56003 9.68113C7.53251 9.76375 7.51874 9.83261 7.51874 9.88769C7.59214 10.2733 7.75729 10.714 8.01418 11.2097C8.23438 11.6504 8.57385 12.1875 9.03259 12.821C9.49132 13.4544 10.1427 14.1843 10.9868 15.0105C11.8125 15.8552 12.5465 16.5116 13.1888 16.9799C13.8309 17.4479 14.3678 17.7923 14.799 18.0127C15.2302 18.233 15.5605 18.3661 15.7898 18.4119L16.1338 18.4808C16.1705 18.4808 16.2303 18.467 16.3127 18.4395C16.3953 18.4119 16.4549 18.3798 16.4917 18.3431L18.0605 16.7456C18.391 16.4519 18.7762 16.305 19.2166 16.305C19.5286 16.305 19.7762 16.36 19.9597 16.4702H19.9872L25.2994 19.61C25.6848 19.8489 25.9142 20.1518 25.9876 20.519Z" fill="#2a4b80"/>
      </svg>
       06 40 84 36 19 </p>




  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
