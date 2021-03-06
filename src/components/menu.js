import { Link } from "gatsby"
import React, { Component } from "react"

import Backdrop from "./backdrop"

class Menu extends Component {
  state = {
    show: false,
    show2: false,
    show3: false,
  }
  menuAppearsHandler = () => {
    this.setState({ show: true })
    setTimeout(
      function() {
        this.setState({ show2: true })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ show3: true })
      }.bind(this),
      600
    )
  }

  iconeAppearsHandler = () => {
    this.setState({ show2: false })
    setTimeout(
      function() {
        this.setState({ show: false })
      }.bind(this),
      200
    )
    setTimeout(
      function() {
        this.setState({ show3: false })
      }.bind(this),
      400
    )
  }
  render() {
    let menuIcone = (
      <div className="menuSmall" onClick={this.menuAppearsHandler}>
        <div className="menu-svg">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="22.0935" y2="1" stroke="white" stroke-width="2" />
            <line
              y1="8.92944"
              x2="22.0935"
              y2="8.92944"
              stroke="white"
              stroke-width="2"
            />
            <line
              y1="17"
              x2="22.0935"
              y2="17"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    )

    let menu = (
      <div
        className="menu"
        style={{
          right: this.state.show2 ? "-10px" : "-300px",
          display: this.state.show ? "block" : "none",
        }}
      >
        <Link to="/">
          {" "}
          <p>
            {" "}
            ACCUEIL{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/lecabinet/">
          {" "}
          <p>
            {" "}
            LE CABINET{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/domaines-d-expertise">
          {" "}
          <p>
            {" "}
            DOMAINES D'EXPERTISES{" "}
            <svg
              className="polygon"
              width="10"
              height="4"
              viewBox="0 0 10 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4L0.669823 0.5H9.33008L5 4Z" fill="white" />
            </svg>{" "}
          </p>{" "}
        </Link>
        <div className="ppetit">
          <Link to="/indemnisation-des-victimes/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              DÉFENSE DES VICTIMES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
          <Link to="/defense-des-salaries/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              DÉFENSE DES SALARIÉS{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
          <Link to="/defense-des-personnes-malades-handicap/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              DÉFENSE DES MALADES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
        </div>
        <Link to="/noshonoraires/">
          {" "}
          <p>
            HONORAIRES{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/posts/">
          {" "}
          <p>
            {" "}
            PUBLICATIONS{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/actualites/">
          {" "}
          <p>
            {" "}
            ACTUALITÉS{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>
        <Link to="/infos-conseils-pratiques/">
          {" "}
          <p>
            {" "}
            INFOS ET CONSEILS PRATIQUES{" "}
            <svg
              className="polygon"
              width="10"
              height="4"
              viewBox="0 0 10 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4L0.669823 0.5H9.33008L5 4Z" fill="white" />
            </svg>{" "}
          </p>{" "}
        </Link>
        <div className="ppetit">
          <Link to="/conseils-pratiques/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              CONSEILS PRATIQUES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
          <Link to="/infos-pratiques/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              INFOS PRATIQUES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
          <Link to="/modeles-et-formulaires/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              MODÈLES ET FORMULAIRES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
          <Link to="/liens-utiles/">
            {" "}
            <p style={{ fontWeight: `100` }}>
              {" "}
              LIENS UTILES{" "}
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                  fill="white"
                />
              </svg>{" "}
            </p>{" "}
          </Link>
        </div>
        <Link to="/contact/">
          {" "}
          <p>
            {" "}
            CONTACT ET ACCÈS{" "}
            <svg
              width="5"
              height="7"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.08008 4.74994L0.580078 9.08012L0.580078 0.419861L4.08008 4.74994Z"
                fill="white"
              />
            </svg>{" "}
          </p>{" "}
        </Link>

        <p className="close" onClick={this.iconeAppearsHandler}>
          <svg
            id="cross"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="23.9244"
              y1="63.3012"
              x2="74.8046"
              y2="10.9543"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="24.023"
              y1="12.903"
              x2="77.4122"
              y2="62.6885"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </p>
      </div>
    )

    return (
      <div>
        <Backdrop
          show3={this.state.show3}
          show2={this.state.show2}
          clicked={this.iconeAppearsHandler}
        />
        {menuIcone}
        {menu}
      </div>
    )
  }
}

export default Menu
