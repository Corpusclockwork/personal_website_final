import axios from "axios";
import "../css/Art.css";
import { useState, useEffect } from "react";
import ImageSlideshowMode from "./ImageSlideshowMode";

function DigitalArt() {
    const development = "http://localhost:8080";
    const hostRootURL = development;
    const [imageList, setImageList] = useState([]);

    const [isSlideshowMode, setIsSlideshowMode] = useState(false);
    const [imageUrlList, setimageUrlList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    async function getAPI() {
        const imageData = await axios.get(hostRootURL + '/getDigitalArtImageFileNames');
        setimageUrlList(imageData.data);
        setImageList(imageData.data.map((image, index) => 
            <div key={`imageContainer_${index}`} className="imageContainer">
                <img onClick={() => {setIsSlideshowMode(true); setSelectedImage(image);}} key={`image_${index}`} src={hostRootURL + '/' + image} className={isSlideshowMode ? "" : "image"} />
            </div>
        ));
    }

    useEffect(() => {
        getAPI();
      }, []);

    return(
        <>
        <div>
            {isSlideshowMode && <ImageSlideshowMode images = {imageUrlList} clickedImage = {selectedImage} closeSlideshow = {() => {setIsSlideshowMode(false)}}/>}
        </div>
        <div className="ArtBodyContainer">
            <div className="ArtBody">
                <div className="ArtText">
                    I used FireAlpaca up until the start of 2025 when I finally brought a
                    new laptop that wouldn't make sounds of agony whenever I tried to run Krita.
                    My current laptop also has a big enough screen that I can actually use Krita comfortably, so that's quite nice.
                    I still use a Wacom tablet that is around nine years old though.
                </div>
                <div className="imagesContainer" key="imagesContainer"> 
                    {imageList}
                </div>
            </div>
        </div>
        </>
    );
};


export default DigitalArt;