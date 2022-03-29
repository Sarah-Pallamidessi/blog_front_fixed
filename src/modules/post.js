import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import PostComment from "./postComment"

const Post = (props) => {
    const { id } = useParams()
    console.log(id)
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);

    const fetchData = async (id) => {

        const response = await fetch(`http://blog-backend-fixed.herokuapp.com/api/blog/${id}`);
        const posts = await response.json();
        
        setPost(posts);
        const response2 = await fetch(`http://blog-backend-fixed.herokuapp.com/api/comment/${id}`);
        const comments = await response2.json();
        setComment(comments.comments);
        console.log(comments)
    }

    useEffect(async () => {
        await fetchData(id);
    }, [id]);

        
    const {title, body, image} = post

    return (
        <div>
            <div class="header" style={{ backgroundImage: `url(../large-${image})`}}></div>
            <Container>
                <Row>
                    <h1>{title}</h1>
                </Row>
                <hr/>
                
                return <div dangerouslySetInnerHTML={{__html: body}}></div>
                <hr/>
                <h2>Comments</h2>
                {
                comment.map((com)=>{
                    
                    return <div><p>{com.body}</p><hr/></div>
                })}
                <h2>Post a comment</h2>
                <PostComment id={id}></PostComment>
                <div style={{height:200}}></div>
            </Container>
        </div>
        )
    };
  
  export default Post;