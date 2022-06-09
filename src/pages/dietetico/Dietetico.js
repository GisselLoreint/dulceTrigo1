import Header from '../../componentes/Header/Header';
import NavBar from '../../componentes/NavBar/NavBar';
import Footer from '../../componentes/Footer/Footer';
import Navbarcatalogo2 from '../../componentes/navbarcatalogo2/Navbarcatalogo2';
import CatDietetico from '../../componentes/Catalogo/CatDietetico';
import Whatsapp from '../../componentes/whatsapp/Whatsapp';

function Dietetico() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>Dietético</h2>
            <Navbarcatalogo2 />
            <CatDietetico />
            <Whatsapp />
            <Footer />
        </div>
    );
}

export default Dietetico;