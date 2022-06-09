import { Link } from 'react-router-dom';
import './Navbarcatalogo2.css';
import iconPasabocas from '../../assets/img/icon-pasabocas.svg';
import iconEspecial from '../../assets/img/icon-especial.svg';
import iconDietetico from '../../assets/img/icon-dietetico.svg';

function Navbarcatalogo2() {

    return (
        <div class="btn-pasteleria">
            <button name='btntortas' type="submit" class="seleccion">
                <img src={iconPasabocas}></img>
                <Link to="/pasabocas" className="itemcata">Pasabocas</Link>
            </button>
            <button name='btnpostres' type="submit" className="border-btn btn-catalogo-space">
                <img src={iconEspecial}></img>
                <Link to="/especiales" className="itemcata">Especiales</Link>
            </button>
            <button name='btngalletas' type="submit" className="border-btn">
                <img src={iconDietetico}></img>
                <Link to="/dietetico" className="itemcata">Dietético</Link>
            </button>
        </div>
    );
}

export default Navbarcatalogo2;
