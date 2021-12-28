import './About.css';
import './Skills.css'
import './Footer.css';
function Footer(){
    return(
        <footer className='footer' id='footer'>
            <div className='container'>
                <h2>Liên hệ với tôi</h2>
                <div className='footer-content'>
                 <div className='footer-item'>
                    <a href='https://www.facebook.com/tranthianhnhibmt/'>Facebook</a>
                    <a href='https://www.instagram.com/tranthianhnhi/?hl=vi'>Instagram</a>
                    <a href='kedin.com/in/nhi-tran-thi-anh-2ba106210/'>LinkedIn</a>
                </div>
                <div className='footer-item'>
                    <a href='https://github.com/imnkjnkj'>Github</a>
                    <a href='https://codepen.io/tran-anh-nhi'>CodePen</a>
                </div>
                <div className='footer-item'>
                    <p>anhnhitran1804@gmail.com</p>
                    <p>0942945262</p>
                </div>                   
                </div>


            </div>
        </footer>
    )

}
export default Footer;