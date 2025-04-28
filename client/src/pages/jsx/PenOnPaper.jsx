import axios from "axios";
import "../css/Art.css";
import { useState, useEffect } from "react";
import ImageSlideshowMode from "./ImageSlideshowMode";

function PenOnPaper() {
    const hostRootURL = import.meta.env.VITE_API_ENDPOINT;
    const [imageList, setImageList] = useState([]);

    const [isSlideshowMode, setIsSlideshowMode] = useState(false);
    const [imageUrlList, setimageUrlList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const getAPI = async () => {
        const imageData = await axios.get(hostRootURL + '/getPenOnPaperImageFileNames');
        setimageUrlList(imageData.data);
        setImageList(imageData.data.map((image, index) => 
            <div key={`imageContainer_${index}`} className="imageContainer">
                <img 
                    preload="true"
                    onClick={() => {setIsSlideshowMode(true); 
                    setSelectedImage(image);}} 
                    key={`image_${index}`} 
                    src={hostRootURL + '/' + image} 
                    className={isSlideshowMode ? "" : "image"}  
                />
            </div>
        ));
    }

    useEffect(() => {
        getAPI();
      }, []);

    return(
        <>
        <div>
            {isSlideshowMode && 
            <ImageSlideshowMode 
                images = {imageUrlList} 
                clickedImage = {selectedImage} 
                closeSlideshow = {() => {setIsSlideshowMode(false)}} 
                imageType="PenOnPaper"
            />}
        </div>
        <div className="ArtBodyContainer">
            <div id ="/penonpaper" className="ArtBody">
                <div className="ArtText">
                    All of these are done straight to paper using ballpoint pen, using pencil is more stressful, makes the whole process seem overly important. 
                    Also having the chance to correct mistakes means that I will never be done if I use pencil. Most of these are pretty old
                    and I don't really like the way they look anymore, and don't have much to say about them. 
                    The more recent stuff is at the top of the page for convenience.
                    Less descriptions are present in this section, but I hope you have a good time anyway :).
                </div>
                <div className="imagesContainer" key="imagesContainer"> 
                    {imageList}
                </div>
            </div>
        </div>
        </>
    );
};


export default PenOnPaper;