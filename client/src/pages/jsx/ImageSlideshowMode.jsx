import { useEffect, useState } from "react";
import axios from "axios";
import "../css/Slideshow.css";
import { FaTimes, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function ImageSlideshowMode({images, clickedImage, closeSlideshow}) {
    const development = "http://localhost:8080";
    const hostRootURL = development;

    const [currentImage, setCurrentImage] = useState(clickedImage);
    const [currentDescription, setCurrentDescription] = useState("");

    async function getImageDescription() {
        const descriptionData = await axios.get(
            hostRootURL + `/getDigitalArtImageDescription`, 
            {params: {imageToGetDescriptionOf: currentImage}}
        )
        .then(function (response) {
            setCurrentDescription(response.data);
        })
        .catch(function (error) {
            setCurrentDescription("");
        });
    }

    useEffect(() => {
        getImageDescription();
    }, [currentImage]);
        

    function nextImage() {
        const currentImageIndex = images.indexOf(currentImage);
        function nextImageIndex() {
            if (currentImageIndex === images.length - 1) {
                return 0;
            } else {
                return currentImageIndex + 1;
            }
        }
        const nextImage = images[nextImageIndex()];
        setCurrentImage(nextImage);
    }

    function previousImage() {
        const currentImageIndex = images.indexOf(currentImage);
        function previousImageIndex() {
            if (currentImageIndex === 0) {
                return images.length - 1;
            } else {
                return currentImageIndex - 1;
            }
        }
        const previousImage = images[previousImageIndex()];
        setCurrentImage(previousImage);
    }
    
    return (
        <div className="slideshowContainer">
            <FaAngleLeft className="leftArrow" onClick={() => {previousImage()}}> </FaAngleLeft>
            <div className="slideshowImageContainer">
                <img className="slideshowImage" src={hostRootURL + '/' + currentImage}></img>
                <div className="descriptionSection">
                    {currentDescription}
                </div>
            </div>
            <FaAngleRight className="rightArrow" onClick={() => {nextImage()}}> </FaAngleRight>
            <FaTimes onClick={() => {closeSlideshow()}} className="closeButton"></FaTimes>
        </div>
    )

}

export default ImageSlideshowMode;