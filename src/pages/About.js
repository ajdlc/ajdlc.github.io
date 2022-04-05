import usaFlag from '../assets/usa_flag.png';
import AboutMeComponent from '../components/AboutMeComponent';
import '../css/about.css';


function About() {
    const items = [
        {
            title: "Software Developer",
            iconClasses: "fa-solid fa-code",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, dolore rem fugiat deserunt asperiores earum. A vel iste, nostrum explicabo, quaerat error vitae facilis saepe magnam ea suscipit, accusamus omnis exercitationem cumque est. Soluta, illo, ratione at amet ipsa reiciendis suscipit deserunt culpa aperiam adipisci ullam hic. Nisi soluta cum expedita eos necessitatibus, vero deleniti unde non est. Nulla ducimus, eos porro ea illum tempore eius repudiandae, expedita commodi totam sapiente molestiae aspernatur quas aut minus hic atque? Quos, nostrum impedit? Modi excepturi, quas minus eum provident atque cumque vel est optio numquam eligendi at aut dolore accusantium aspernatur quos neque molestiae temporibus sunt. Ab magni repellat ratione minus quibusdam earum accusamus voluptate cupiditate quos, totam rem ut consequatur rerum!"
        },
        {
            title: "System Administrator",
            iconClasses: "fa-solid fa-computer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci similique totam fugiat. Omnis modi optio placeat aliquid nulla, eum cumque asperiores non veniam, neque recusandae illo similique quia at quas libero velit ab! Ea neque numquam ut ullam, aliquam recusandae rerum eos aliquid possimus corporis deserunt! Quasi laudantium ut quia! Dolores facilis nam, ullam saepe id nobis reprehenderit facere doloribus quos assumenda sit quis distinctio? Voluptatem, rerum. Dolores voluptatum officiis laborum praesentium, accusantium tempore rerum delectus voluptate nam, perferendis magnam nulla commodi earum at quasi eos voluptas enim facilis reiciendis. Molestiae dolorum optio dolore voluptatem tempore ex magnam beatae illo sequi quibusdam voluptatibus unde minus recusandae iusto, at quidem doloremque laboriosam, iste dolores aliquid sunt maxime natus. Expedita, ab sapiente."
        },
        {
            title: "Husband and Father",
            iconClasses: "fa-solid fa-ring",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, mollitia soluta cupiditate autem quisquam, inventore fugiat perferendis incidunt unde quae debitis. Odio voluptatem nemo sunt quia dolorum qui fugit nobis adipisci, voluptatibus facilis doloribus fugiat."
        },
        {
            title: "Christian",
            iconClasses: "fa-solid fa-cross",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto impedit ipsum perspiciatis nam doloribus temporibus."
        }
    ];

    const listItems = items.map((item) => {
        return <AboutMeComponent title={item.title} iconClasses={item.iconClasses} description={item.description} key={item.title}></AboutMeComponent>
    })

    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-12 p-5 m-5 text-center landing">
                    I love to solve complex problems with clean and thorough solutions.
                </div>
            </div>
            {listItems}
            <div className="row justify-content-around mt-3">
                <div className="col-12 col-lg-6 align-self-lg-center mb-3">
                    <h1 className='inline'>Proud American</h1>
                    <img src={usaFlag} alt="US Flag" width={100} height={50} className="ms-3"/>
                </div>
                <div className="col-12 col-lg-6">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci similique totam fugiat. Omnis modi optio placeat aliquid nulla, eum cumque asperiores non veniam, neque recusandae illo similique quia at quas libero velit ab! Ea neque numquam ut ullam, aliquam recusandae rerum eos aliquid possimus corporis deserunt! Quasi laudantium ut quia! Dolores facilis nam, ullam saepe id nobis reprehenderit facere doloribus quos assumenda sit quis distinctio? Voluptatem, rerum. Dolores voluptatum officiis laborum praesentium, accusantium tempore rerum delectus voluptate nam, perferendis magnam nulla commodi earum at quasi eos voluptas enim facilis reiciendis. Molestiae dolorum optio dolore voluptatem tempore ex magnam beatae illo sequi quibusdam voluptatibus unde minus recusandae iusto, at quidem doloremque laboriosam, iste dolores aliquid sunt maxime natus. Expedita, ab sapiente.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default About;