import ExperienceComponent from '../components/ExperienceComponent';
import '../css/experience.css';


function Experience() {
    const experience = [
        {
            title: "Computer Scientist",
            employer: "Department of Defense - Edwards Air Force Base",
            timeEmployed: "Oct 2020 - Present",
            bulletPoints: [
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ad.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus expedita provident pariatur! Provident adipisci eligendi ea ad natus quaerat reprehenderit officiis molestias mollitia quae.",
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel libero saepe, ipsa laborum dolor alias repellendus inventore numquam.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos voluptatibus minima veniam, officia quo?"
            ]
        },
        {
            title: "Programmer 3",
            employer: "Integrits Corp - Edwards Air Force Base",
            timeEmployed: "July 2019 - Oct 2020",
            bulletPoints: [
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident aliquam, blanditiis perferendis et porro non dolores, illum eligendi dolor voluptatum facilis, debitis ex tenetur iste temporibus quia reiciendis! Quae.",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus totam, magni commodi minus dignissimos ipsa! Omnis atque quod consequatur voluptate quos! Dolorem, assumenda minima.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sit omnis aspernatur! Qui, sit!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, inventore! Numquam iusto blanditiis sit omnis impedit repellat?"
            ]
        },
        {
            title: "System Administrator II",
            employer: "InuTeq, LLC - NASA Armstrong Flight Research Center",
            timeEmployed: "Aug 2018 - July 2019",
            bulletPoints: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio officiis veniam dignissimos. Vel, consectetur!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore cumque magni tempora laboriosam blanditiis repellendus est dolores magnam quia.",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, velit!"
            ]
        },
        {
            title: "Senior Field Service Tehnician",
            employer: "Global Commerce Services - NASA Armstrong Flight Research Center",
            timeEmployed: "May 2016 - Aug 2018",
            bulletPoints: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio officiis veniam dignissimos. Vel, consectetur!",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore cumque magni tempora laboriosam blanditiis repellendus est dolores magnam quia.",
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, velit!"
            ],
            end: true
        }
    ];

    const experienceList = experience.map(exp => {
        if (exp.end === false) {
            return <ExperienceComponent key={exp.title} title={exp.title} employer={exp.employer} timeEmployed={exp.timeEmployed} bulletPoints={exp.bulletPoints}></ExperienceComponent>
        } else {
            return <ExperienceComponent key={exp.title} title={exp.title} employer={exp.employer} timeEmployed={exp.timeEmployed} bulletPoints={exp.bulletPoints} end={exp.end}></ExperienceComponent>
        }
    });


    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 p-5 m-5 text-center landing">
                    My Professional Experience
                </div>
            </div>
            {experienceList}
        </div>
    );
}

export default Experience;