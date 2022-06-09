import './Catalogo.css';
import panhoregano from '../../assets/img/pan-hamburguesa-oregano.svg';
import panbrioche from '../../assets/img/pan-brioche.svg';
import panhespecial from '../../assets/img/pan-hamburguesa-especial.svg';
import panporegano from '../../assets/img/pan-perro-oregano.svg';
import panpajonjoli from '../../assets/img/pan-perro-ajonjoli.svg';
import panpespecial from '../../assets/img/pan-perro-especial.svg';
import pansoregano from '../../assets/img/pan-sandwich-oregano.svg';
import pansespecial from '../../assets/img/pan-sandwich-especial.svg';
import pantajado from '../../assets/img/pan-tajado.svg';

function CatEspeciales() {
    return (
        <div>
            <section id="container-tortas" class="tortas">

                <article>
                    <img src={panhoregano} data-bs-toggle="modal" data-bs-target="#catalogoModal" />
                    <p>Pan hamburguesa<br/> con oregano</p>

                    <div class="modal m1" id="catalogoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content box-modal">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div class="ventana">
                                    <div class='cont-modal1'>
                                        <img src={panhoregano} class="modalImg" />
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
                    <img src={panbrioche}></img>
                    <p>Pan hamburguesa<br/> tipo brioche</p>
                </article>

                <article>
                    <img src={panhespecial}></img>
                    <p>Pan hamburguesa<br/> especial</p>
                </article>

                <article>
                    <img src={panporegano}></img>
                    <p>Pan para perro<br/> con oregano</p>
                </article>

                <article>
                    <img src={panpajonjoli}></img>
                    <p>Pan para perro<br/>con ajonjolí</p>
                </article>

                <article>
                    <img src={panpespecial}></img>
                    <p>Pan para perro<br/> especial</p>
                </article>

                <article>
                    <img src={pansoregano}></img>
                    <p>Pan para sandwich<br/> con orégano</p>
                </article>

                <article>
                    <img src={pansespecial}></img>
                    <p>Pan para sandwich<br/> especial</p>
                </article>

                <article>
                    <img src={pantajado}></img>
                    <p>Pan tajado</p>
                </article>
            </section>

        </div >
    );
}

export default CatEspeciales;