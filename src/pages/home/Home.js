import './Home.css';
import Header from "../../componentes/Header/Header";
import NavBar from "../../componentes/NavBar/NavBar";
import Footer from "../../componentes/Footer/Footer";
import Whatsapp from '../../componentes/whatsapp/Whatsapp';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <NavBar />
            <Header />
            <h2 className='titutlo'>HOME</h2>
            <Link to="/tortas" className="home-link">Pasteleria</Link>
            <Link to="/pasabocas" className="home-link">Panadería</Link>
            <Whatsapp />
            <Footer />
        </div>
    );
}
export default Home;