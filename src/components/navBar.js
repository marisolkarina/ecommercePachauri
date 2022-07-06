import 'bootstrap/dist/css/bootstrap.min.css';

function navBar() {
    return (
      <div className="navBar">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sagitario</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        <a className="nav-link" href="#">Cortes de cabello</a>
                        <a className="nav-link" href="#">Teñidos de cabello</a>
                        <a className="nav-link" href="#">Maquillaje</a>
                        <a className="nav-link" href="#">Laceado</a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
}

export default navBar;