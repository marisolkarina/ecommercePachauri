import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-rosa">
            <div className="container-fluid">

                <Link to="/" className="navbar-brand ms-3 color-fucsia">Sagitario</Link>

                <button className="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 botonera">
                        <li className="me-lg-5 p-3 text-center">
                           <Link to="/category/maquillaje" className="color-fucsia" aria-current="page">Maquillaje</Link>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <Link to="/category/perfumes" className="color-fucsia" aria-current="page">Perfumes</Link>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <Link to="/category/cuidadodelrostro" className="color-fucsia" aria-current="page">Cuidado del rostro</Link>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <Link to="/category/cuidadocapilar" className="color-fucsia" aria-current="page">Cuidado capilar</Link>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <Link to="/category/dermocosmetica" className="color-fucsia" aria-current="page" href="#">Dermocosmética</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget/>
                </div>
                
            </div>
        </nav>

    );
}

export default NavBar;