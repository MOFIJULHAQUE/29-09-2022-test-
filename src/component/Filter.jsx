import React, { useState, useEffect } from 'react'
import axios from "axios";


export function Filter() {

    const [posts, setPosts] = useState([]);
    // const [post, setPost] = useState([]);
    //     const [id, setId] = useState(1);
    // const [btnId,setBtnId]= useState(1)
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setPosts([posts,...response.data])
                setFilteredData([posts,...response.data]);
            })
    }, [])

    useEffect(() => {
        const afterFilterData = posts.filter((post) => {
            if (post.name) {
                return post.name.includes(search);
            }
        })
        setFilteredData(afterFilterData)
    }, [search]);



    // useEffect(() => {
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setPost(response.data)
    //         })
    // }, [btnId]) 
    //here "[]" is used to stop the api call multiple times and it just call the API only once
    return (
        <div>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            {filteredData.map((post) => (
                <div key={post.id}>


                    <h4>{post.name}</h4>



                </div>
            ))}



        </div>
    )
}
