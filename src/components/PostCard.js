import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"

const PostCard = (props) => {
  const { item, getData } = props
  const { state, dispatch } = useContext(UserContext)

  const makeComment = (e, text, postId) => {
    fetch("https://mern-blog-iti.herokuapp.com/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        e.target[0].value = ""
        getData()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deletPost = (postId) => {
    fetch(`https://mern-blog-iti.herokuapp.com/deletepost/${postId}`, {
      method: "delete",
      headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        getData()
      })
  }

  const unLikePost = (id) => {
    fetch("https://mern-blog-iti.herokuapp.com/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        getData()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const likePost = (id) => {
    fetch("https://mern-blog-iti.herokuapp.com/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        getData()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div
      className='card home-card'
      style={{ borderRadius: "20px", padding: "1px" }}
      key={item._id}
    >
      <div className='userPicAndName'>
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "20px",
            marginLeft: "7px",
          }}
          src={item.postedBy.pic}
        />
        <h5>
          <Link
            style={{ fontWeight: "bold", marginLeft: "7px" }}
            className='linktoprofile text-darken-2'
            to={
              item.postedBy._id !== state._id
                ? "/profile/" + item.postedBy._id
                : "/profile"
            }
          >
            {item.postedBy.name}
          </Link>
          {item.postedBy._id == state._id && (
            <i
              className='deleteicon material-icons'
              style={{ float: "right" }}
              onClick={() => deletPost(item._id)}
            >
              delete
            </i>
          )}
        </h5>
      </div>
      <div className='card-image'>
        <img className='cardimagepost' src={item.photo} />
      </div>
      <div className='card-content'>
        <div
          className='likes'
          style={{
            display: "flex",
            alignitems: "center",
          }}
        >
          {item.likes.includes(state._id) ? (
            <i
              className='material-icons thumbyicon dislike'
              onClick={() => unLikePost(item._id)}
            >
              thumb_down
            </i>
          ) : (
            <i
              className='material-icons thumbyicon '
              onClick={() => likePost(item._id)}
            >
              thumb_up
            </i>
          )}

          <span
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginLeft: "5px",
            }}
          >
            {item.likes.length} Likes
          </span>
        </div>

        <h6>{item.title}</h6>
        <p>{item.body}</p>

        <div className='comments-section'>
          {item.comments.map((record) => {
            return (
              <h6 key={record._id}>
                <span style={{ fontWeight: "500", color: "red" }}>
                  {record.postedBy.name}{" "}
                </span>
                {record.text}
              </h6>
            )
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            makeComment(e, e.target[0].value, item._id)
          }}
        >
          <input type='text' placeholder='add comment' />
        </form>
      </div>
    </div>
  )
}
export default PostCard
