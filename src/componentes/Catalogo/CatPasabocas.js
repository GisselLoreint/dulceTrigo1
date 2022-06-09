import './Catalogo.css';
import palitroques from '../../assets/img/palitroques.svg';
import minicroissants from '../../assets/img/mini-croissants.svg';
import panalineado from '../../assets/img/pan-alineado.svg';
import liberales from '../../assets/img/liberales.svg';
import palitosqueso from '../../assets/img/palitos-queso.svg';
import coquitos from '../../assets/img/coquitos.svg';
import pasabocas from '../../assets/img/pasabocas.svg';
import flautas from '../../assets/img/flautas.svg';
import pancalentano from '../../assets/img/pan-calentano.svg';

function CatPasabocas() {
    return (
        <div>
            <section id="container-tortas" class="tortas">

                <article>
                    <img src={palitroques} data-bs-toggle="modal" data-bs-target="#catalogoModal" />
                    <p>Palitroques</p>

                    <div class="modal m1" id="catalogoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content box-modal">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <div class="ventana">
                                    <div class='cont-modal1'>
                                        <img src={palitroques} class="modalImg" />
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
                    <img src={minicroissants}></img>
                    <p>Mini croissants</p>
                </article>

                <article>
                    <img src={panalineado}></img>
                    <p>Pan alineado</p>
                </article>

                <article>
                    <img src={liberales}></img>
                    <p>Liberales</p>
                </article>

                <article>
                    <img src={palitosqueso}></img>
                    <p>Palitos de queso</p>
                </article>

                <article>
                    <img src={coquitos}></img>
                    <p>Coquitos</p>
                </article>

                <article>
                    <img src={pasabocas}></img>
                    <p>Pasabocas rellenos<br/>de bocadillo</p>
                </article>

                <article>
                    <img src={flautas}></img>
                    <p>Flautas</p>
                </article>

                <article>
                    <img src={pancalentano}></img>
                    <p>Pan calentano</p>
                </article>
            </section>

        </div >
    );
}

export default CatPasabocas;