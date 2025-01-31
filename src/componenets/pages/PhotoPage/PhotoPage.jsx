import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './PhotoPage.scss';
import likeOutlineIcon from "../../../assets/images/Like_Outline.svg"

const API_KEY = "3311a5bf-592d-4c57-8cab-0478f94be322";

export default function PhotoPage() {

    // to be used to capture photoId from URL when the photo was clicked on from mainpage and directed to photo page. This is used get the ID related photo object and comments from API
    const { photoId } = useParams();

    // based on whichever photo was clicked from the main page, this photo state will store that specific photo's key, value pairs from /photos/:id
    // the state (aka the photo id object) is updated when we use the fetchPhoto function
    const [photo, setPhoto] = useState(null);

    // this state is meant to store the comment related to the photo ID. It's updated when the id is passed into fetchComments
    const [comments, setComments] = useState([]);

    // this state captures and updates when new comments are added onto the page
    const [newComment, setNewComment] = useState({ name: '', comment: '' });

    // get photo id object from /photos/id endpoint
    const fetchPhoto = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=${API_KEY}`);
            const photoState = setPhoto(response.data);
            photoState
            console.log(`This is the photo state: ${photoState}`);
        } catch (error) {
            console.error(error);
        }
    };

    // get comments object from photos/id/comments endpoint
    const fetchComments = async (id) => {
        try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=${API_KEY}`);
            const sortedComments = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setComments(sortedComments);
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect used to call the above functions when photo has been clicked on and the program has an id or id has changed
    useEffect(() => {
        if (photoId) {
            fetchPhoto(photoId);
            fetchComments(photoId);
        }
    }, [photoId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${photoId}/comments?api_key=${API_KEY}`,
                newComment
            );
            setComments([response.data, ...comments]); // Prepend the new comment to the list
            setNewComment({ name: '', comment: '' }); // Reset the form
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US'); // Default 'en-US' format is mm/dd/yyyy
    };

    return (
        <main className="photo-page">
            <div className="photo__container">
                {photo && (
                    <div>
                        <img src={photo.photo} alt={photo.description} className="photo__image" />

                        <p className="photo__tags">Tags: {photo.tags}</p>

                        <div className='photo__like-date-photographer'>

                            <div className="photo__like-date">

                                <div className="photo__like">
                                    <img src={likeOutlineIcon} />
                                    <p className="photo__like">
                                    Likes: {photo.likes} 
                                    </p>
                                </div>
                            

                                <p className='photo__date'>Date: {formatDate(photo.timestamp)}</p>
                                
                            </div>

                            <p className="photo__photographer"> Photo by {photo.photographer}</p>
                            
                        </div>

                    </div>
                )}
            </div>

            {/* Add Comment Form */}
            <div className="add-comment">
                <form onSubmit={handleSubmit}>
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

            {/* Display Comments */}
            <div className="photo__comments">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id}>
                            <h4>{comment.name} <span>{formatDate(comment.timestamp)}</span></h4>
                            <p>{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments available.</p>
                )}
            </div>
        </main>
    );
}