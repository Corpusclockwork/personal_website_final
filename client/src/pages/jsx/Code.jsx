import "../css/Code.css";

function Code(){
    return(
        <div id="/" className="CodeBodyContainer"> 
            <div className="CodeBody"> 
                <div className="CodeBodyHeader">
                    Personal projects with descriptions, and links to the projects on github
                </div>
                <ul className="ProjectsSection">
                    <li className="project">
                        <b className="projectName">This website :D</b>
                        <div className="projectDescription"> I made this website use React in the front end, NodeJS and Express for the backend. It is hosted using AWS and CloudFlare :)</div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName">Climbing app <b className="projectState"> (IN PROGRESS)</b></b> 
                        <div className="projectDescription"> A website where users can log in and track the climbs they have done at my local climbing gym, not finished, but I thought I'd link it here anyway. 
                            Pretty sure this has been done before (see TopLogger), but I could do with a better understanding of user verification lol 
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Code;