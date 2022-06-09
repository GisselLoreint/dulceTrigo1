import './Catalogo.css';
import chocoflan from '../../assets/img/chocoflan.svg';
import amapola from '../../assets/img/amapola.svg';
import nubes from '../../assets/img/nubes.svg';
import bomba from '../../assets/img/bomba.svg';
import cuatro from '../../assets/img/4en1.svg';
import sonata from '../../assets/img/sonata.svg';

function Postres() {

    return (
        <section id="container-tortas" class="tortas">

            <article id='artChocoflan'>
                <img src={chocoflan}></img>
                <p>Choco flan</p>
            </article>

            <article>
                <img src={amapola}></img>
                <p>Amapola</p>
            </article>

            <article>
                <img src={nubes}></img>
                <p>Nubes</p>
            </article>

            <article>
                <img src={bomba}></img>
                <p>Bomba de maracuya<br/> y chocolate</p>
            </article>

            <article>
                <img src={cuatro}></img>
                <p>4 en 1</p>
            </article>

            <article>
                <img src={sonata}></img>
                <p>Sonata de sabores</p>
            </article>
        </section>
    );
}

export default Postres;