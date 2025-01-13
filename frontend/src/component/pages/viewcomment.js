import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Viewcomment = (props) => {

    const { postId } = props

    const [commentData, setCommentData] = useState([])

    useEffect(() => {
        axios
            .get("https://stack-blogs-8.onrender.com/commentlistviewall/" + postId)
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
