import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    
    return (
        <div>
            <p>We have quotes by:</p>
            <table style={{marginLeft: "500px"}}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.map((author, i) => {
                        return(
                            <tr key={i}>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={(e) => navigate(`/edit/${author._id}`)}>Edit</button>
                                    <button onClick={(e) => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>    
        
    )
}
