import './Catalogo.css';
import gpistacho from '../../assets/img/g-pistacho.svg';
import gavena from '../../assets/img/g-avena.svg';
import geredvelvet from '../../assets/img/g-red.svg';
import gvainilla from '../../assets/img/g-vainilla.svg';
import gmantequilla from '../../assets/img/gm.svg';
import gnutella from '../../assets/img/g-nutella.svg';

function Galletas() {
    return (
        <section id="container-tortas" class="tortas">

            <article>
                <img src={gpistacho}></img>
                <p>Red velvet</p>
            </article>

            <article>
                <img src={gavena}></img>
                <p>Arco iris</p>
            </article>

            <article>
                <img src={geredvelvet}></img>
                <p>Arco iris</p>
            </article>

            <article>
                <img src={gvainilla}></img>
                <p>Arco iris</p>
            </article>

            <article>
                <img src={gmantequilla}></img>
                <p>Arco iris</p>
            </article>

            <article>
                <img src={gnutella}></img>
                <p>Arco iris</p>
            </article>
        </section>
    );
}

export default Galletas;