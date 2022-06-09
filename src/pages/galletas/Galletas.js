import './Galletas.css';
import Header from '../../componentes/Header/Header';
import NavBar from '../../componentes/NavBar/NavBar';
import Footer from '../../componentes/Footer/Footer';
import Navbarcatalogo from '../../componentes/Navbarcatalogo/Navbarcatalogo';
import CatGalletas from '../../componentes/Catalogo/catGalletas';
import Whatsapp from '../../componentes/whatsapp/Whatsapp';

function Galletas() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>Galletas</h2>
            <Navbarcatalogo />
            <CatGalletas />
            <Whatsapp />
            <Footer />
        </div>
    );
}

export default Galletas;