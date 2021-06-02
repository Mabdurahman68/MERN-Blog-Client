import React from "react"

import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className='blue page-footer'>
      <div className='container'>
        <div className='center'>
          <h5 className='white-text'>About MyBlog</h5>
          <p className='grey-text text-lighten-4'>Muhammed Abdurahman Blog</p>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          © 2021 All Rights Reserved to Muhammed Abdurahman
          <a className='grey-text text-lighten-4 right' href='#!'>
            MERN Project for ITI
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
