import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

const PostSummary = (props) => {
const {title, body, id, image, created} = props.post
    
    return (
        <div>
            <Table bordered>
                <tbody>
                    <tr>
                    <td class="imgtd" colspan="2"><div class="caption" style={{ backgroundImage: `url(${image})`}}><h2>{title}</h2></div></td> 
                    </tr>
                    <tr>
                    <td colspan="2"><div class="date block">{created}</div></td>
                    </tr>
                    <tr>
                    <td><Link to={`/blog/${id}`}><div class="btn_read block">Read</div></Link></td>
                    <td><Link to={`/blog/${id}`}><div class="btn_comment block">Comment</div></Link></td>
                    </tr>
                </tbody>
                </Table>
            
        </div>
        )
  };
  
  export default PostSummary;