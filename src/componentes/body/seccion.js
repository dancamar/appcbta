import ima3 from '../../img/ima3.png';

function Sectiondos() {
    return (
        <div className="container">
            <div className="row alig-items-center">
                <div className="col-md-9">
                    <h1>
                        Where can I get some?
                        </h1>

                    <p>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words which don't look even
                        slightly believable. If you are going to use a passage of Lorem Ipsum,
                        you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
                        therefore always free from repetition, injected humour, or non-characteristic words etc.
</p>

                    <div>
                        <button type="button" class="btn btn-link">Continuar leyendo...<i class="bi bi-chevron-double-right"></i></button>
                    </div>


                </div>
                <div className="col-md-3">
                    <img className="img-fluid" src={ima3} alt="imagen1" />
                </div>
            </div>
        </div>
    )
}

export default Sectiondos;