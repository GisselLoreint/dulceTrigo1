import './Catalogo.css';
import redvelvet from '../../assets/img/redvelvet.svg';
import arcoiris from '../../assets/img/arcoiris.svg';
import arandanos from '../../assets/img/arandanos.svg';
import selvanegra from '../../assets/img/selvanegra.svg';
import cocofresa from '../../assets/img/cocoyfresa.svg';
import pistachofrutos from '../../assets/img/pistacho.svg';
import zanahoria from '../../assets/img/zanahoria.svg';
import obsesion from '../../assets/img/obsesion.svg';
import baileys from '../../assets/img/baileys.svg';
import red2 from '../../assets/img/red3.svg';

function catTortas() {
    return (
        <div>
            <section id="container-tortas" class="tortas">

                <article>
                    <img src={redvelvet} data-bs-toggle="modal" data-bs-target="#catalogoModal" />
                    <p>Red velvet</p>

                    <div class="modal m1" id="catalogoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content box-modal">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div class="ventana">
                                    <div class='cont-modal1'>
                                        <img src={red2} class="modalImg" />
                                        <div>
                                            <h3 class="modalTitle">Red velvet</h3>
                                            <p class="modalP">Bizcocho de terciopelo rojo con un suave sabor a cacao
                                                relleno de frosting de queso crema
                                            </p>
                                        </div>
                                    </div>
                                    <div class='cont-modal2'>

                                        <div class="btn-window-cakes">
                                            <button type="submit">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <h3>1</h3>
                                            <button type="submit">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                        </div>

                                        <div class="option-cakes">
                                            <div class="option1">
                                                <input type="radio" name="porciones1" id="porciones1" />
                                                <label for="porciones2">8 porciones</label>
                                                <p>$38.000</p>
                                            </div>
                                            <div class="option1">
                                                <input type="radio" name="porciones2" id="porciones2" />
                                                <label for="porciones1">10 porciones</label>
                                                <p>$48.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn-car">
                                    <a href="../compras.html" class="modalCarrito">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>

                <article>
                    <img src={arcoiris}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={arandanos}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={selvanegra}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={cocofresa}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={pistachofrutos}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={zanahoria}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={obsesion}></img>
                    <p>Arco iris</p>
                </article>

                <article>
                    <img src={baileys}></img>
                    <p>Arco iris</p>
                </article>
            </section>

        </div >
    );
}

export default catTortas;