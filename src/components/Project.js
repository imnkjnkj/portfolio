import './About.css';
import './Project.css';
import {Carousel} from '@trendyol-js/react-carousel';
import Card  from './Card';
const projects= [
    {
        title:"Website Woodies- Furniture Online Shop Landing Page",
        image: "https://i.imgur.com/4l9hXJm.png",
        description: "Xây dựng giao diện dựa theo thiết kế Figma, sử dụng SCSS, HTML, Bootstrap5",
        link: "https://imnkjnkj.github.io/Woodies/html/index.html"
    },
    {
        title:"Website Trung tâm phát triển Năng lực VLU",
        image: "https://i.imgur.com/MKoxCvu.png",
        description: "Xây dựng giao diện dựa trên layout có sẵn, sử dụng thư viện bootstrap5, html, css, js",
        link: "https://imnkjnkj.github.io/VLU-TTPTNL/html/index.html"

    },
    {
        title:"Website AgriFarm",
        image: "https://i.imgur.com/08o1Byx.png",
        description: "Là website Quản lí trang trại bò, Sử dụng Figma để thiết kế",
        link:"https://www.figma.com/proto/lCwLMccriNDpp7JOmOzazu/AgriFarm?page-id=735%3A2&node-id=735%3A3&starting-point-node-id=735%3A3"
    },
    {
        title:"Website RealBook",
        image: "https://i.imgur.com/5toce35.png",
        description: "Là website review, tin tức các loại sách, sử dụng Figma để thiết kế",
        link: "https://www.figma.com/proto/GLsYpikrUlblJ9dyxz9LwW/RealBook?page-id=0%3A1&node-id=160%3A619&starting-point-node-id=160%3A619"
    }
]
function Projects(){
    const card = projects.map(project=>{
        return(
            <Card
            prop ={project}
             />
        )
        })
    return(
        <div className='projects' id='projects'>
            <div className='container'>
            <h2>Dự Án Cá Nhân</h2>
            <Carousel show={1} slide={1} swiping={true}>
            {card}
            </Carousel>
            </div>

        </div>
    )

}
export default Projects;