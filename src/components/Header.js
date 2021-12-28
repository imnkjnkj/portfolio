import './Header.css';
import menu from '../image/menu.png';

function Header(){
    const handleMenu = ()=>{
        let x = document.getElementById("myTopnav");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    }
    return(
        <header className='header'>

            <div className='navbar' id="myTopnav">
            <div className='logo'> <a href='#'>Portofolio</a></div>
            <div className='menu'>
            <a className='nav-item' id='home'>Home</a>
            <a className='nav-item' href='#about'>Giới thiệu</a>
            <a className='nav-item' href='#skills'>Kỹ năng</a>
            <a className='nav-item' href='#projects'>Dự án</a>
            <a className='nav-item' href='#footer'>Liên hệ</a>
        <div className='menu-icon'>
        <a onClick={handleMenu}>
            <img src={menu}></img>
         </a>
        </div>

            </div>
        </div>
        <div className='text'>
                <h1>Hi, It’s Tran Thi Anh Nhi</h1>
                <h4>FrontEnd Developer</h4>
                <a href='https://www.linkedin.com/in/nhi-tran-thi-anh-2ba106210/'>LinkedIn</a>
            </div>
        </header>
    );
}
export default Header;