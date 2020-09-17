import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
export default props => {
    const { id } = props;
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]); 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
                
            })
    }, [])
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
           name
        })
            .then(()=>navigate('/'))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr =[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <p>Edit this author</p>
            <form onSubmit={updateAuthor}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <button type="button" onClick={()=>navigate('/')}>Cancel</button>             
                <input type="submit" value="submit" />                    
            </form>
        </div>
    )
}
