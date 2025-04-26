import axios from "axios";
import "../css/Art.css";
import { useState, useEffect } from "react";
import ImageSlideshowMode from "./ImageSlideshowMode";

function Animation({animationImages}){
    const hostRootURL = import.meta.env.VITE_API_ENDPOINT;
    console.log(hostRootURL);
    const [imageList, setImageList] = useState([]);

    const [isSlideshowMode, setIsSlideshowMode] = useState(false);
    const [imageUrlList, setimageUrlList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    async function getAPI() {
        const imageData = await axios.get(hostRootURL + '/getAnimationFileNames');
        setimageUrlList(imageData.data);
        setImageList(imageData.data.map((image, index) => 
            <div key={`imageContainer_${index}`} className="imageContainer">
                <video onClick={() => {setIsSlideshowMode(true); setSelectedImage(image);}} key={`image_${index}`} src={hostRootURL + '/' + image} className={isSlideshowMode ? "" : "image"} />
            </div>
        ));
    }

    useEffect(() => {
        getAPI();
      }, []);

    return(
        <>
        <div>
            {isSlideshowMode && <ImageSlideshowMode images = {imageUrlList} clickedImage = {selectedImage} closeSlideshow = {() => {setIsSlideshowMode(false)}} imageType="Animation"/>}
        </div>
        <div className="ArtBodyContainer">
            <div className="ArtBody">
                <div className="ArtText">
                I think I like animation in theory but in practice whenever I finish an animation I never want to animate again.
                I do want to get better at it, though as it is satisfying when it's over.
                </div>
                <div className="imagesContainer" key="imagesContainer"> 
                    {imageList}
                </div>
            </div>
        </div>
        </>
    )
}

export default Animation;