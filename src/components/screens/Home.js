import React, { useState, useEffect, useContext } from "react"
import { useHistory, Link } from "react-router-dom"

import { UserContext } from "../../App"
import Loader from "../Loader"
import PostCard from "../PostCard"
const Home = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    console.log("getData function")
    fetch("https://mern-blog-iti.herokuapp.com/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false)
        console.log(result)
        setData(result.posts)
      })
  }

  return (
    <div className='home'>
      {isLoading ? <Loader /> : data.length ? (
        data.map((item) => {
          return <PostCard key={item._id} item={item} getData={getData} />
        })
      ) : (
        (<h4 className='no-data'>No posts on your blog</h4>)
      )}

      {state && (
        <div className='fixed-action-btn'>
          <Link className='btn-floating btn-large blue' to='/create'>
            <i className='material-icons'>add</i>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home
