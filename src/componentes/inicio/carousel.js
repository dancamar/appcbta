import ima1 from '../../img/ima1.png';
import ima2 from '../../img/ima2.jpg';
import ima3 from '../../img/ima3.png';

function DCarousel() {

    return (
        <container className="p-2">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={ima1} className="d-block mx-auto" alt="..." width="40%" height="70%"/>
                        <div className="carousel-caption d-none d-md-block">
                           <div className="text-light bg-secondary">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={ima2} className="d-block mx-auto" alt="..."  width="40%" height="70%"/>
                        <div className="carousel-caption d-none d-md-block">
                        <div className="text-light bg-secondary">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={ima3} className="d-block mx-auto" alt="..."  width="40%" height="70%"/>
                        <div className="carousel-caption d-none d-md-block">
                        <div className="text-light bg-secondary">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </container>
    )
}

export default DCarousel;