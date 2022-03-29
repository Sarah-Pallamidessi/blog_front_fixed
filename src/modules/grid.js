import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import PostSummary from './postSummary.js';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Grid = () => {
    
    const [data, setData] = useState([]);

    const fetchData = async () => {
        
        const response = await fetch('http://blog-backend-fixed.herokuapp.com/api/blog');
        const posts = await response.json();
        
        let activeCol = 0;
        let columns = [[],[],[]];

        posts.posts.forEach((post) => {

            activeCol++;
            columns[activeCol%3].push(post)
        })
        
        setData(columns);
    }

    useEffect(async () => {
        await fetchData();
    }, []);

    return (
        <div>
                <Carousel autoPlay="true" showThumbs={false} infiniteLoop="true" showLegend={false} >
                    <div>
                        <img src="header_1.png" />
                    </div>
                    <div>
                        <img src="header_2.png" />
                    </div>
                    <div>
                        <img src="header_3.png" />
                    </div>
                </Carousel>

                <div class="d-flex justify-content-between block">
                    <div>Blog</div>
                    <div class="blog-count">6 articles available</div>
                </div>
                <hr/>
 
            <Container>
                    <Row>
                        {data.map((column)=>{
                            console.log(column)
                            
                            return (
                            
                            <Col>{column.map((post)=>{
                                console.log(post)
                                return (<Row>
                                    <PostSummary post={post} ></PostSummary>
                                </Row>)
                            })}</Col>
                            
                            )
                        })}
                    </Row>
            </Container>
        </div>
        )
  };
  
  export default Grid;