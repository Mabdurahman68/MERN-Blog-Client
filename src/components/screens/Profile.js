/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"

import { UserContext } from "../../App"
import Loader from "../Loader"
import PostCard from "../PostCard"
const Profile = () => {
  const [data, setData] = useState([])
  const { state, dispatch } = useContext(UserContext)
  const [image, setImage] = useState("")
  const [isLoading, setIsLoading] = useState("")

  // const [url, setUrl] = useState("");

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    console.log("mypost function")
    fetch("https://mern-blog-iti.herokuapp.com/mypost", {
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

  useEffect(() => {
    if (image) {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "meanblog")
      data.append("cloud_name", "meanblogger")
      fetch("https://api.cloudinary.com/v1_1/meanblogger/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("https://mern-blog-iti.herokuapp.com/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({ pic: data.url }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result)
              localStorage.setItem(
                "user",
                JSON.stringify({ ...state, pic: data.pic }),
              )
              dispatch({ type: "UPDATEPIC", payload: result.pic })
              // window.location.reload();
            })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [dispatch, image, state])
  const updatePic = (file) => {
    setImage(file)
  }



  return (
    <>
      <div style={{ maxWidth: "550px", margin: "0px auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "18px 0px",
            borderBottom: "1px solid grey",
          }}
        >

          <div>
            <img
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "80px",
                marginRight: "20px",
              }}
              src={state ? state.pic : "loading..."}
            />
            <div className="file-field input-field">
              <div
                className="btn #64b5f6 blue darken-1"
                style={{ marginLeft: "20px" }}
              >
                <span>update pic</span>
                <input
                  type="file"
                  onChange={(e) => updatePic(e.target.files[0])}
                />
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
              </div>
            </div>
          </div>
          <div>
            <h4>{state ? state.name : "Loading"}</h4>
            <h4>{state ? state.email : "Loading"}</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "109%",
              }}
            >
              <h6>
                {data.length}{" "}
                {data.length === 1 ? <b>Post</b> : <b>Posts</b>}
              </h6>
              <h6> {state ? state.followers.length : "0"} followers</h6>
              <h6> {state ? state.following.length : "0"} following</h6>
            </div>
          </div>
        </div>
      </div>



      {
        isLoading ? <Loader /> : data.length ? (
          data.map((item) => {
            return <PostCard key={item._id} item={item} getData={getData} />
          })
        ) : (
          (<h4 className='no-data'>You haven't created any posts yet</h4>)
        )
      }

      {
        state && (
          <div id='btnAddNewPost'>
            <Link className='addlink' to='/create'>
              <button className='addNewPost'>+</button>
            </Link>
          </div>
        )
      }
    </>
  )
}

export default Profile
