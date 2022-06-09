import './Header.css'
import logo from '../../assets/img/LogoDulceTrigo.svg';
import { Link } from 'react-router-dom';

function header() {
    return (
        <header id="header-container">
            <Link to="/home"><img src={logo} alt="Logo dulce trigo" class="logo" /></Link>
            <div class="button-header">
                <h3 class="header-title">“Traemos el dulce sabor que le hace falta a tu vida”</h3>
                <div class="buttons-container">
                    <input type="search" id="search" className='icon-search' name="search" placeholder=" " />
                    <a href="src/pages/compras.html">
                        <button type="submit">
                            <i class="fa-solid fa-cart-shopping shop"></i>
                        </button>
                        <button type="submit">
                            <i class="fa-solid fa-user user"></i>
                        </button>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default header;
