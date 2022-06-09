import { Link } from 'react-router-dom';
import './Navbarcatalogo.css';
import iconTortas from '../../assets/img/icon-tortas-v.svg';
import iconGalletas from '../../assets/img/icon-postres-v.svg';
import iconPostres from '../../assets/img/icon-galletas-v.svg';

function Navbarcatalogo() {

    return (
        <div class="btn-pasteleria">
            <button name='btntortas' type="submit" class="seleccion">
                <img src={iconTortas}></img>
                <Link to="/tortas" className="itemcata">Tortas</Link>
            </button>
            <button name='btnpostres' type="submit" className="border-btn btn-catalogo-space">
                <img src={iconGalletas}></img>
                <Link to="/galletas" className="itemcata">Galletas</Link>
            </button>
            <button name='btngalletas' type="submit" className="border-btn">
                <img src={iconPostres}></img>
                <Link to="/postres" className="itemcata">Postres</Link>
            </button>
        </div>
    );
}

export default Navbarcatalogo;