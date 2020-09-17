import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            });
    },[]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    


    return (
        <div>
           <Link to="/new">Add an author</Link>
           {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
           
        </div>
    )
}
