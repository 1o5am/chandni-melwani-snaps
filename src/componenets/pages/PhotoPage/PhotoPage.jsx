import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import './PhotoPage.scss';
import likeOutlineIcon from "../../../assets/images/Like_Outline.svg"

const base_URL = import.meta.env.VITE_API_URL ;

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
            const response = await axios.get(`${base_URL}/photos/${id}`);
            const photoState = setPhoto(response.data);
            photoState
        } catch (error) {
            console.error(error);
        }
    };

    // get comments object from photos/id/comments endpoint

    // const fetchComments = async (id) => {
    //     const response = await axios.get(`http://localhost:${PORT}`)
    // }
    const fetchComments = async (id) => {
        try {
            const response = await axios.get(`${base_URL}/photos/${id}/comments`);
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
                `${base_URL}/photos/${photoId}/comments`,
                newComment
            );
            setComments([response.data, ...comments])
            console.log("This is response.data:", response.data);
            console.log("This is comments state:", comments);
            console.log("This is setComments state:", setComments);
            // setComments([response.data, ...comments]); // Prepend the new comment to the list
            setNewComment({ name: '', comment: '' }); // Reset the form
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US'); // Default 'en-US' format is mm/dd/yyyy
    };

    // return (
    //     <main className="photo-page">
    //         <div className="photo__container">
    //             {photo && (
    //                 <div>
    //                     <img src={photo.photo} alt={photo.description} className="photo__image" />

    //                     <p className="photo__tags">Tags: {photo.tags}</p>

    //                     <div className='photo__like-date-photographer'>

    //                         <div className="photo__like-date">

    //                             <div className="photo__like">
    //                                 <img src={likeOutlineIcon} />
    //                                 <p className="photo__like">
    //                                 Likes: {photo.likes} 
    //                                 </p>
    //                             </div>
                            

    //                             <p className='photo__date'>Date: {formatDate(photo.timestamp)}</p>
                                
    //                         </div>

    //                         <p className="photo__photographer"> Photo by {photo.photographer}</p>
                            
    //                     </div>

    //                 </div>
    //             )}
    //         </div>

    //         {/* Add Comment Form */}
    //         <div className="add-comment">
    //             <form onSubmit={handleSubmit}>
    //                 <div>
    //                     <label>
    //                         Name:
    //                         <input
    //                             type="text"
    //                             name="name"
    //                             value={newComment.name}
    //                             onChange={handleInputChange}
    //                             required
    //                         />
    //                     </label>
    //                 </div>
    //                 <div>
    //                     <label>
    //                         Comment:
    //                         <textarea
    //                             name="comment"
    //                             value={newComment.comment}
    //                             onChange={handleInputChange}
    //                             required
    //                         />
    //                     </label>
    //                 </div>
    //                 <button type="submit">Add Comment</button>
    //             </form>
    //         </div>

    //         {/* Display Comments */}
    //         <div className="photo__comments">
    //             {comments.length > 0 ? (
    //                 comments.map((comment) => (
    //                     <div key={comment.id}>
    //                         <h4>{comment.name} <span>{formatDate(comment.timestamp)}</span></h4>
    //                         <p>{comment.comment}</p>
    //                     </div>
    //                 ))
    //             ) : (
    //                 <p>No comments available.</p>
    //             )}
    //         </div>
    //     </main>
    // );

    return (
        <main className="photo-page">
            <div className="photo-page__container">
                {photo && (
                    <div className="photo-page__content">
                        <img src={photo.photo} alt={photo.description} className="photo-page__image" />
    
                        <div className="photo-page__tags">
                            {photo.tags.map((tag, index) => (
                                <span key={index} className="photo-page__tag">{tag}</span>
                            ))}
                        </div>
    
                        <div className="photo-page__info">
                            <div className="photo-page__likes">
                                <img src={likeOutlineIcon} alt="like icon" className="photo-page__like-icon" />
                                <p className="photo-page__like-text">Likes: {photo.likes}</p>
                            </div>

                            <div className="photo-page__date-photographer">
                                <p className="photo-page__date">Date: {formatDate(photo.timestamp)}</p>
                            
                                <p className="photo-page__photographer">Photo by {photo.photographer}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    
            {/* Add Comment Form */}
            <div className="photo-page__add-comment">
                <form className="photo-page__form" onSubmit={handleSubmit}>
                    <div className="photo-page__form-group">
                        <p> Name:</p>
                        <label className="photo-page__label">
                            <input
                                type="text"
                                name="name"
                                className="photo-page__input"
                                value={newComment.name}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="photo-page__form-group">
                        <p>Comment:</p>
                        <label className="photo-page__label">
                            <textarea
                                name="comment"
                                className="photo-page__textarea"
                                value={newComment.comment}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className="photo-page__button">Submit</button>
                </form>
            </div>
    
            {/* Display Comments */}
            <div className="photo-page__comments">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="photo-page__comment">
                            <div className='photo-page__comment-date'>
                                <p className="photo-page__comment-name">
                                    {comment.name} </p>
                                <span className="photo-page__comment-date">{formatDate(comment.timestamp)}</span>
                            </div>
                            <p className="photo-page__comment-text">{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <p className="photo-page__no-comments">No comments available.</p>
                )}
            </div>
        </main>
    );
}