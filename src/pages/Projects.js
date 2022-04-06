import '../css/projects.css';
import ProjectsComponent from '../components/ProjectsComponent';
import sbEdwardsLogo from  '../assets/sb-edwards-logo-with-text.png';


function Projects() {
    const items = [
        {
            name: "STARBASE Edwards",
            logo: sbEdwardsLogo,
            description: "This was a program written to show my skills",
            technologies: [
                "JavaScript",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link"
                }
            ]
        },
        {
            name: "Inventory Manager",
            iconClasses: "fa-solid fa-boxes-stacked",
            description: "This was a program written to show my skills",
            technologies: [
                "JavaScript",
                "Node.js"
            ],
            links: [
                {
                    name: "Gitlab",
                    iconClasses: "fa-brands fa-gitlab"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link"
                }
            ]
        },
        {
            name: "My Portfolio",
            iconClasses: "fa-solid fa-image-portrait",
            description: "This was a program written to show my skills",
            technologies: [
                "JavaScript",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link"
                }
            ]
        },
        {
            name: "My Baby Jotter",
            iconClasses: "fa-solid fa-baby",
            description: "This was a program written to show my skills",
            technologies: [
                "JavaScript",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link"
                }
            ]
        },
        {
            name: "Car Gerbil",
            iconClasses: "fa-solid fa-car-side",
            description: "This was a program written to show my skills",
            technologies: [
                "JavaScript",
                "Node.js"
            ],
            links: [
                {
                    name: "Github",
                    iconClasses: "fa-brands fa-github"
                },
                {
                    name: "Live Website",
                    iconClasses: "fa-solid fa-link"
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