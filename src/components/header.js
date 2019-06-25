import { NavLink, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import pic1 from '../images/Qmameri_cmjn.png';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `0.05rem`,
      boxShadow: `0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)`

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.35rem 1.0875rem`,
        fontSize: `.7rem`,
        display: `flex`,
        justifyContent: `space-between`,

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
          to="/"
          activeClassName="active"
          style={{
            color: `#2a4b80`,
            textDecoration: `none`,
            fontFamily: `Avenir`,
            marginRight: `30px`
          }}
        >
          DOMAINES D'EXPERTISE
        </Link>



        <Link
          to="/noshonoraires/"
          activeClassName="active"
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
          to="/"
          activeClassName="active"
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
          to="/"
          activeClassName="active"
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
