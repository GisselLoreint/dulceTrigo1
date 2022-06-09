import Header from '../../componentes/Header/Header';
import NavBar from '../../componentes/NavBar/NavBar';
import Footer from '../../componentes/Footer/Footer';
import Navbarcatalogo2 from '../../componentes/navbarcatalogo2/Navbarcatalogo2';
import CatPasabocas from '../../componentes/Catalogo/CatPasabocas';
import Whatsapp from '../../componentes/whatsapp/Whatsapp';

function Pasabocas() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>Pasabocas</h2>
            <Navbarcatalogo2 />
            <CatPasabocas />
            <Whatsapp />
            <Footer />
        </div>
    );
}

export default Pasabocas;