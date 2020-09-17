import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => setAuthor(res.data))
    }, [])
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <AuthorForm />                   
        </div>
    )
}
