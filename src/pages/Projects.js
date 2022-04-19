import '../css/projects.css';
import ProjectsComponent from '../components/ProjectsComponent';
import sbEdwardsLogo from  '../assets/sb-edwards-logo-with-text.png';


function Projects() {
    const items = [
        {
            name: "STARBASE Edwards",
            logo: sbEdwardsLogo,
            description: "A website for the Department of Defense STEM education program, STARBASE Edwards. I worked one-on-one with the director of the STARBASE Edwards program in designing the website. This was a solo development project and it took me about 3 months to deploy the website. I also manage the Linux VPS that the website is hosted on. For full disclosure, I am also a board member of the 501(c)(3) Nonprofit associated with the program.",
            technologies: [
                "JavaScript",
                "Vue.js",
                "Vuetify.js",
                "Vuex",
                "Vue-Router",
                "Webpack",
                "Node.js"
            ],
            links: [
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link",
                    url: "https://starbase-edwards.org"
                }
            ]
        },
        {
            name: "Inventory Manager",
            iconClasses: "fa-solid fa-boxes-stacked",
            description: "As the name implies, Inventory Manager is an inventory management API built from the ground up. The program allows for different types of users (regular and admin) to use the program to add, track, and manage inventory items. Each item has details such as model, type, and location, associated with it to improve tracking purposes. This program was primarily built to demonstrate my ability to build API's utilizing Node.js and Express.js while integrating user authentication.",
            technologies: [
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose.js",
                "bCrypt",
                "PassPort"
            ],
            links: [
                {
                    name: "Gitlab",
                    iconClasses: "fa-brands fa-gitlab",
                    url: "https://gitlab.com/ajdlc/inventory-manager"
                }
            ]
        },
        {
            name: "My Portfolio",
            iconClasses: "fa-solid fa-image-portrait",
            description: "This website!",
            technologies: [
                "JavaScript",
                "React",
                "React-Router",
                "Bootstrap",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github",
                    url: "https://github.com/ajdlc/ajdlc.github.io"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link",
                    url: "https://ajdlc.github.io"
                }
            ]
        },
        {
            name: "My Baby Jotter",
            iconClasses: "fa-solid fa-baby",
            description: "My Baby Jotter is a web application that allows parents of newborn and infant children track their wet diapers, feedings, naps, and medications. This was my capstone project for my bachelor's degree program and it came from a need as a new parent myself.",
            technologies: [
                "PHP",
                "Laravel 6.0",
                "Bootstrap"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github",
                    url: "https://github.com/ajdlc/my-baby-jotter-v2"
                }
            ]
        },
        {
            name: "Car Gerbil",
            iconClasses: "fa-solid fa-car-side",
            description: "Car Gerbil enables users to determine their cars MPG and to determine which gas and gas station provides them with the best possible MPG. It utilizes the Goolge Maps API to determine gas stations within 100m of the users location via geolocation services in the browser. NOTE: As of right now the website is down due to problems with the Google Maps API and the database and hosting services I used at the time.",
            technologies: [
                "JavaScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose.js",
                "bCrypt",
                "Vue.js",
                "Vuex",
                "Vue-Router",
                "Vuetify.js",
                "Netlify.com",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github",
                    url: "https://github.com/ajdlc/car-keeper"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link",
                    url: "https://cargerbil.com"
                }
            ]
        }
    ];

    const projectsList = items.map(item => {
        if (item.hasOwnProperty("iconClasses")) {
            return <ProjectsComponent key={item.name} name={item.name} iconClasses={item.iconClasses} description={item.description} technologies={item.technologies} links={item.links}></ProjectsComponent>
        } else {
            return <ProjectsComponent key={item.name} name={item.name} logo={item.logo} description={item.description} technologies={item.technologies} links={item.links}></ProjectsComponent>
        }
    })

    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 p-5 m-5 text-center landing">
                    Let me show you what I've done.
                </div>
            </div>
            {projectsList}
        </div>
    );
}

export default Projects;