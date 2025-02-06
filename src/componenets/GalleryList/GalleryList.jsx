import GalleryCard from "../GalleryCard/GalleryCard";
import "./GalleryList.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const base_URL = import.meta.env.VITE_API_URL ;

export default function( {activeFilter} ) {

    const [photos, setPhotos] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const response = await axios.get(`${base_URL}/photos`);
                console.log("Photos API response:", response.data);
                setPhotos(response.data);
            } catch (error) {
                console.error("Error fetching photos:", error);
            }
        };
    
        getPhotos();
    }, []);

    // Filter photos based on the active filter
    const filteredPhotos = photos.filter((photo) => {
        // Return all photos if no filter is active
        if (!activeFilter) {
            return true;
        }
        // Check if the photo's tags array includes the activeFilter
        return photo.tags.includes(activeFilter);
    });

    return (
        <div className="gallery-list">
            {filteredPhotos.map((photo) => {
                return (
                    // <Link key={photo.id} to={`/photo/${photo.id}`}>
                    //     <GalleryCard photo={photo} tags={tags}/>
                    // </Link>
                    <Link key={photo.id} to={`/photo/${photo.id}`}>
                    <GalleryCard photo={photo}/>
                    </Link>
                    
                );
            }
        )}
        </div>
    );
}

  // const getPhotos = async () => {
    //     try {
    //         const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=${API_KEY}`);
    //         console.log("Photots API response:", response.data); 
    //         setPhotos(response.data);

    //     } catch (error) {s
    //         console.error("Error fetching photos:", error);
    //     }
    // }

    // // const getTags = async () => {
    // //     try {
    // //         const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/tags?api_key=${API_KEY}`);
    // //         console.log(response.data);
    // //         setTags(response.data);
    // //     } catch (error) {
    // //         console.error("Error fetching tags:", error);
    // //     }
    // // }

    // useEffect(() => {
    //     getPhotos();
    //     console.log(
    //         "Tags per photo:",
    //         photos.map(photo => ({
    //             id: photo.id,
    //             totalTags: photo.tags.length,
    //             tags: photo.tags
    //         }))
    //     );
    // }, []);