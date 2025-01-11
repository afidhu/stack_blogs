import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Viewcomment = (props) => {

    const { postId } = props

    const [commentData, setCommentData] = useState([])

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/commentlistviewall/" + postId)
            .then((resp) => {
                setCommentData(resp.data)
                // setcommenter(resp.data.author)

            })
           
    }, [postId])
    

    return (
        <div>
            {
                commentData.map((val, index) => {
                    return (
                        <>
                            <h4 id="scrollspyHeading1">{val.author.email}</h4>
                            <p> {val.comment}</p>
                           
                        </>
                    )
                })
            }

        </div >
    );
}

export default Viewcomment;
