import React, { useState, useEffect } from 'react'
import axios from "axios";


export function Filter() {


    const [comment, setComment] = useState([]);
    const [name, setname] = useState("id labore ex et quam laborum")


    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/comments")
    //         .then((response) => setComment([...response.data]))
    // });
    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode.com/comments/${name}")
            .then((response)=>{
                console.log(response.data);
                setComment(response.data);
            })
    })
    return (
        <div>
            
            
                

<h2>{comment.name}</h2>
                    
    
                        <input
                         type="text"
                         value={name}
                         onChange={(e)=> setName(e.target.value)}
                        />
    
                    
                
            
        </div>
    )
}
