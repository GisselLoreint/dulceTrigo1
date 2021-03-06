import './Postres.css';
import Header from '../../componentes/Header/Header';
import NavBar from '../../componentes/NavBar/NavBar';
import Footer from '../../componentes/Footer/Footer';
import Navbarcatalogo from '../../componentes/Navbarcatalogo/Navbarcatalogo';
import CatPostres from '../../componentes/Catalogo/catPostres';
import Whatsapp from '../../componentes/whatsapp/Whatsapp';

function Postres() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>Postres</h2>
            <Navbarcatalogo />
            <CatPostres />
            <Whatsapp />
            <Footer />
        </div>
    );
}

export default Postres;