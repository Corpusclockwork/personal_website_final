import "../css/Art.css";

function Animation({animationImages}){
    const imageList = Object.values(animationImages).map((image, index) => (
        <div key={`imageContainer_${index}`} className="imageContainer">
            {/* <Link to={`/animation/${index}`}> */}
                <img key={`image_${index}`} src={image.default} alt={`Image ${index}`} className="image" />
            {/* </Link> */}
        </div>
      ));

    return(
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
    )
}

export default Animation;