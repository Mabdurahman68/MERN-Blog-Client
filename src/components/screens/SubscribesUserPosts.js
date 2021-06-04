import React, { useState, useEffect, useContext } from "react"
import { useHistory, Link } from "react-router-dom"

import { UserContext } from "../../App"
import Loader from "../Loader"
import PostCard from "../PostCard"
const SubscribesUserPosts = () => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState([])
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    console.log("getData function")
    fetch("https://mern-blog-iti.herokuapp.com/followersposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setData(result.posts)
        setIsLoading(false)

      })
  }

  return (
    <div className='home'>
      {isLoading ? <Loader /> : data.length ? (
        data.map((item) => {
          return <PostCard key={item._id} item={item} getData={getData} />
        })
      ) : (
        (<h4 className='no-data'>You don't have any posts for your followers yet</h4>)
      )}

      {state && (
        <div id='btnAddNewPost'>
          <Link className='addlink' to='/create'>
            <button className='addNewPost'>+</button>
          </Link>
        </div>
      )}
    </div>
  )
}
export default SubscribesUserPosts
