import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-rosa">
            <div className="container-fluid">

                <a className="navbar-brand ms-3 color-fucsia" href="#">Sagitario</a>

                <button className="navbar-toggler me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 botonera">
                        <li className="me-lg-5 p-3 text-center">
                            <a className="color-fucsia" aria-current="page" href="#">Maquillaje</a>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <a className="color-fucsia" aria-current="page" href="#">Perfumes</a>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <a className="color-fucsia" aria-current="page" href="#">Cuidado del rostro</a>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <a className="color-fucsia" aria-current="page" href="#">Cuidado capilar</a>
                        </li>
                        <li className="me-lg-5 p-3 text-center">
                            <a className="color-fucsia" aria-current="page" href="#">Dermocosmética</a>
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