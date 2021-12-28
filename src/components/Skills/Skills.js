import '../About/About.css';
import './Skills.css';
import ava from '../../asset/image/ava.jpeg';

const skills=[
    {
        title: "Programs:",
        description: "HTML, CSS, Javascript, SCSS"
    },
    {
        title: "Libraries:",
        description: "Bootstrap 5"
    },
    {
        title: "Khác:",
        description: "Thiết kế UX/UI"
    },
    {
        title: "Ngôn ngữ:",
        description: "Có thể đọc các tài liệu, văn bản Tiếng Anh        "
    }

]

function Skills(){
    const text_item = skills.map(skill=>{
        return(
            <div className='text-item'>
            <span className='text-title'>{skill.title}</span>
            <span className='text-description'>{skill.description}</span>
        </div>
        )    
    })
    return(
        <div className='skills' id='skills'>
        <div className='container'>
            <h2>Kỹ Năng</h2>
            <div className='skills-content'>
                <img src={ava}/>
                <div className='text-content'>
                    {text_item}
                </div>
            </div>
        </div>
        </div>
    )

}
export default Skills;