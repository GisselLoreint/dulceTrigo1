import React from 'react';
import './Slider.css';
import Modal from '../modal/Modal';
import Aniversarios from '../../assets/img/Aniversarios.jpg';
import Fiestas from '../../assets/img/Fiestas-Infantiles.jpg';
import Ocasion from '../../assets/img/Para-Toda-Ocasion.jpg';

function Slider() {
    return (
        <div>
            <section id="slider">
                <ul>
                    <li>
                        <img src={Aniversarios} alt="aniversarios" />
                        <p>Aniversarios</p>
                    </li>
                    <li>
                        <img src={Fiestas} alt="fiestas infantiles" />
                        <p>Fiestas infantiles</p>
                    </li>
                    <li>
                        <img src={Ocasion} alt="para toda ocasión" />
                        <p>Para toda ocasión</p>
                    </li>
                </ul>
            </section>
            <div className="button">
                <button type="button" class="btn-order" data-bs-toggle="modal" data-bs-target="#exampleModal">
                !Haz tu pedido aqui!
                </button>
            </div>
            <Modal />
        </div>
    );
}
export default Slider;