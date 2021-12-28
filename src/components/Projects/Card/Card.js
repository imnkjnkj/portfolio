import './Card.css'

function Card({prop}){
    return(
        <div className='card-item'>
            <div className='card-text'>
                <div className='card-title'>{prop.title}</div>
                <div className='card-description'>{prop.description}</div>
            </div>
            <a href={prop.link}> 
                <img src={prop.image}></img>
            </a>
        </div>
    )
}
export default Card;