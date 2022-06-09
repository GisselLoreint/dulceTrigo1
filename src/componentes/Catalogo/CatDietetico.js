import './Catalogo.css';
import panavena from '../../assets/img/pan-avena.svg';
import pansoya from '../../assets/img/pan-soya.svg';
import panmulticereal from '../../assets/img/pan-multicereal.svg';
import panquinoa from '../../assets/img/pan-quinoa.svg';
import panavenamiel from '../../assets/img/pan-avena-miel.svg';
import mogollamulti from '../../assets/img/mogolla-multigranos.svg';
import tabacos from '../../assets/img/tabacos.svg';
import panlinaza from '../../assets/img/pan-linaza.svg';
import panestevia from '../../assets/img/pan-estevia.svg';

function CatDietetico() {
    return (
        <div>
            <section id="container-tortas" class="tortas">

                <article>
                    <img src={panavena} data-bs-toggle="modal" data-bs-target="#catalogoModal" />
                    <p>Pan de avena</p>

                    <div class="modal m1" id="catalogoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content box-modal">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div class="ventana">
                                    <div class='cont-modal1'>
                                        <img src={panavena} class="modalImg" />
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
                    <img src={pansoya}></img>
                    <p>Pan de soya</p>
                </article>

                <article>
                    <img src={panmulticereal}></img>
                    <p>Pan multicereales</p>
                </article>

                <article>
                    <img src={panquinoa}></img>
                    <p>Pan de quinoa</p>
                </article>

                <article>
                    <img src={panavenamiel}></img>
                    <p>Pan de avena y miel</p>
                </article>

                <article>
                    <img src={mogollamulti}></img>
                    <p>Mogollas multigranos</p>
                </article>

                <article>
                    <img src={tabacos}></img>
                    <p>Tabacos integrales</p>
                </article>

                <article>
                    <img src={panlinaza}></img>
                    <p>Pan de linaza</p>
                </article>

                <article>
                    <img src={panestevia}></img>
                    <p>Pan endulzado con estevia</p>
                </article>
            </section>

        </div >
    );
}

export default CatDietetico;