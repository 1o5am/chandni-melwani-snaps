import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const API_KEY = "3311a5bf-592d-4c57-8cab-0478f94be322"

export default function PhotoPage() {

    const { photoId } = useParams();

    const [photo, setPhoto] = useState(null);

    const fetchPhoto = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=${API_KEY}`);
            console.log(response.data);
            setPhoto(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPhoto(photoId);
    }, [photoId]);


    const [comments, setComments] = useState([]);

    const fetchComments = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`);
            const sortedComments = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            console.log(response.data);
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchComments(photoId);
    }, [photoId]);


    const [newComment, setNewComment] = useState({ name: '', comment: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`, newComment);
            console.log(response.data);
            setComments([response.data, ...comments]);
            setNewComment({ name: '', comment: '' });
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <main className="photo-page">
            <div className="photo__container">
                {photo && (
                    <div>
                        <h3>{photo.photographer}</h3>
                        <img src={photo.photo} alt={photo.description} className="photo__image" />
                    </div>
                )}
                <img />
                <div className="photo__tags">
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                    <button className="photo__tag"></button>
                </div>
                <div className="photo__likes-photographer-date">
                    <div className="photo__likes-date">
                        <p className="photo__like"></p>
                        <p className="photo__date"></p>
                    </div>
                    <p className="photo__photographer">Photo by: </p>
                </div>

                <div className="add-comment">
                    <form onSubmit={handleCommentSubmit}>
                        <div>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={newComment.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Comment:
                                <textarea
                                    name="comment"
                                    value={newComment.comment}
                                    onChange={handleInputChange}
                                    required
                                />
                            </label>
                        </div>
                        <button type="submit">Add Comment</button>
                    </form>
                </div>


                <div className="photo__comments">
                    <div className="photo__comments">
                        {comments.length > 0 ? (
                            comments.map((comment) => (
                                <div key={comment.id}>
                                    <h4>{comment.name} <span>{new Date(comment.timestamp).toLocaleDateString('en-US')}</span></h4>
                                    <p>{comment.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p>No comments available.</p>
                        )}
                    </div>
                    {/* {comment && (
                        <div>
                            <h2>Comments</h2>
                            <p className="photo__comment">{comment.comment}</p>
                        </div>
                    )} */}
                    <p className="photo__comment">  </p>
                    <p className="photo__comment"></p>
                    <p className="photo__comment"></p>
                </div>
            </div>

        </main>
    )
}