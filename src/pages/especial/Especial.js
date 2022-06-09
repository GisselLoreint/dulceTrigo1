import Header from '../../componentes/Header/Header';
import NavBar from '../../componentes/NavBar/NavBar';
import Footer from '../../componentes/Footer/Footer';
import Navbarcatalogo2 from '../../componentes/navbarcatalogo2/Navbarcatalogo2';
import CatEspeciales from '../../componentes/Catalogo/CatEspeciales';
import Whatsapp from '../../componentes/whatsapp/Whatsapp';

function Especial() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>Especiales</h2>
            <Navbarcatalogo2 />
            <CatEspeciales />
            <Whatsapp />
            <Footer />
        </div>
    );
}

export default Especial;