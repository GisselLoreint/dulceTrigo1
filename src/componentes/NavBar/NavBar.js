import { Link } from 'react-router-dom';
import './NavBar.css';
import lineanav from '../../assets/img/linea-nav.svg';

function NavBar() {
    return (
        <div>
            <nav>
                <input type={'checkbox'} id="chk-menu" />
                <label for="chk-menu" className="btn-menu">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <div className="items">
                    <Link to="/" className="item">Home</Link>
                    <hr className="line-nav" />
                    <Link to="/Acercade" className="item">Acerca de</Link>
                    <hr className='line-nav' />
                    <Link to="/Personalizados" className="item">Productos personalizados</Link>
                    <hr class="line-nav" />
                    <Link to="/Contacto" className="item">Contacto</Link>
                </div>
            </nav>
            <img src={lineanav} className='linea-nav' />
        </div>
    )
}

export default NavBar;