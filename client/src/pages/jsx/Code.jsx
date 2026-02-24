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
                        <div className="projectDescription"> I made this website using the Vite React template in the frontend. I used ExpressJS with Node.js for the backend, which deals with image meta data. I have the backend serving the frontend dist folder along with all the images. 
                            I am hosting this on an AWS EC2 instance with a git cloned copy of my repo, and am using Cloudflare for domain management. </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName"><a href="https://alienroutelogger.com/" target="_blank">Climbing route tracker</a></b> 
                        <div className="projectDescription"> A website where users can hypothetically log in and track the climbs they have done at the local climbing gym I work at, pretty sure this has been done before (see TopLogger), 
                            but I wanted a better understanding of setting up databases, as well as more experience in the backend, and using REST APIs. It's built using Javascript with Vue, Python with Django, and a MySQL database. I deployed it using DigitalOcean 
                            (wow, using that was a better experience than using AWS for deployment, might change over to host my personal website there at some point), and used apache2 to serve it, along with CertBot for the SSL certificate.
                            It was fun using Vue again, I used Vue Options API as that's what I am used to.
                                 <b><a href="https://github.com/Corpusclockwork/alien_top_logger/" target="_blank"> Here</a></b> is the link to the github, the README has a more indepth explanation of the project.
                        </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName"> <a href="https://github.com/Corpusclockwork/VueImageMarker" target="_blank">ImageMarker</a></b> 
                        <div className="projectDescription"> I made a Vue equivalent of <a href="https://www.npmjs.com/package/react-image-marker" target="_blank">this</a> (or an alternative version of <a href="https://github.com/jarvisniu/vue-image-marker" target="_blank">this</a> I guess) 
                            for the climbing website mentioned above. I've remade this component using the Vue Composition API, which is apparently the way forwards when it comes to Vue. 
                            I had never used the Vue Composition API before, so built this to get a feel for it.
                        </div>
                    </li>
                    <br />
                    <li className="project">
                        <b className="projectName"><a href="https://github.com/Corpusclockwork/CanvasApp" target="_blank"> CanvasCollab </a><b className="projectState"> (IN PROGRESS)</b></b> 
                        <div className="projectDescription">I hadn't used C# since leaving my last technical job, so thought I should try to relearn it. 
                            This is being built using C#, Typescript with React, and a Postgres database. I tried to link everything together manually, and spent a day fighting Docker, before I just decided to use Microsoft Aspire instead.
                            Still will have to fight a bit with Docker I think, but it should be less tedious now :D. I'm planning to use SignalR for updating the Canvas in real time, but we'll see how it goes. 
                            Wondering if I should use Keycloak for user verification, but I could do with implementing a login page from scratch in C#, it seems interesting. </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Code;