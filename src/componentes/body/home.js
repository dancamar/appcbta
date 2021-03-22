import Heading from '../body/heading';
import Carousel from '../inicio/carousel';
import Sectiondos from '../body/seccion';


function Home(){
    return(
        <div>
        <Carousel/>
        <hr/>
        <Heading/>
        <hr/>
        <Sectiondos/>
        </div>
    )
}

export default Home;