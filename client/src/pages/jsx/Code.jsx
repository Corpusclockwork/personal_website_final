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
                        <b className="projectName"><a href="https://github.com/Corpusclockwork/personal_website_final" target="_blank">This website (link to the repository on github)</a></b>
                        <div className="projectDescription"> I made this website use React in the frontend, NodeJS and ExpressJS for the backend. I have the backend serving the frontend dist folder along with all the images. 
                            I am hosting this on an AWS EC2 instance with a git cloned copy of my repo, and am using Cloudflare for domain management. </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName"><a href="https://alienroutelogger.com/" target="_blank">Climbing route tracker </a></b> 
                        <div className="projectDescription"> A website where users can hypothetically log in and track the climbs they have done at the local climbing gym I work at, pretty sure this has been done before (see TopLogger), 
                            but I wanted a better understanding of setting up databases, as well as more experience in the backend. It's built using Javascript with Vue, Python with Django, and a MySQL database. I deployed it using DigitalOcean 
                            (wow, using that was a better experience than using AWS for deployment, might change over to host my personal website there at some point), and used apache2 to serve it, along with CertBot for the SSL certificate.
                            It was fun using Vue again, I used Vue Options API as that's what I am used to.
                                 <b><a href="https://github.com/Corpusclockwork/alien_top_logger/" target="_blank"> Here</a></b> is the link to the github, the README has a more indepth explanation of the project.
                        </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName"> <a href="https://github.com/Corpusclockwork/VueImageMarker" target="_blank">Image Marker</a><b className="projectState"> (IN PROGRESS)</b></b> 
                        <div className="projectDescription"> I made a Vue equivalent of <a href="https://www.npmjs.com/package/react-image-marker" target="_blank">this</a> (or an alternative version of <a href="https://github.com/jarvisniu/vue-image-marker" target="_blank">this</a> I guess) 
                            for the climbing website mentioned above. I'm making it into a npm package, because one, it's good for me as a developer to think about how to make my code reusable and useful for other people, and two,
                            because I am very generous and kind :)))). I'm structuring this project using Vue Composition API, which is apparently the way forward when it comes to Vue. Can't say I'm a fan yet, but at least I have some experience in it now.
 
                        </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName">Website for a friend<b className="projectState"> (IN PROGRESS)</b></b> 
                        <div className="projectDescription"> One of my friends wanted a website for *her* art, and it gave me an excuse to use Typescript, which I hadn't done before. Honestly I wanted a nice chill frontend project, as my next project is going to be in C.
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Code;