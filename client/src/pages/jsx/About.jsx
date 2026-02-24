import "../css/About.css";

function About(){
    return(
        <div id="/" className="AboutBodyContainer"> 
            <div className="AboutBody"> 
                Hello :D 
                <br />
                This is my personal website. My name is Lamis (see url :P). I've been drawing for
                years and wanted a page that wasn't my personal Instagram to give out to people if they asked about it.
                Some of the art is from when I was younger and worse at making art, but I've included it anyway. Seeing progress
                is always nice :). I sorted the images using the image files' birthtimeMs property, but some of them have inaccurate birthtimes due to being copied around and having 
                had their format changed. Some of the pictures here are over a decade old at this point xD.
                <br />
                <br />
                I've also added a code section for personal programming projects, as it's probably good to showcase skills that actually pay :)))). 
                <br />
                <br />
                I built this website using React for the frontend, and ExpressJS in the backend to serve the images along with the frontend dist file. I'm using AWS for hosting.
                <br />
                <br />
                Have a nice day !
            </div>
        </div>
    )
}

export default About;