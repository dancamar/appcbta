
import ima2 from '../../img/ima2.jpg';
import ima3 from '../../img/ima3.png';
import ima1 from '../../img/ima1.png';

function Heading() {

    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col">
                    <div class="card bg-secondary" style={{width: 350}}>
                        <img src={ima2} class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div class="card bg-secondary" style={{width: 350}}>
                        <img src={ima3} class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div class="card bg-secondary" style={{width: 350}}>
                        <img src={ima1} class="card-img-top rounded-circle" alt="..." />
                        <div class="card-body text-light">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" class="btn btn-link btn-outline-danger"><a href="https://www.youtube.com">Continuar leyendo..<i class="bi bi-chevron-double-right"></i></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading;