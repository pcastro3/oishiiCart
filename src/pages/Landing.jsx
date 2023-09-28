import Layout from "../components/Layout";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../index.css';
import './LandingCarousel.css';

function Landing() {

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    }

    return (
        <Layout >
            {/* <h1 className='bg-blue-600 text-6xl p-5'>The Landing Page</h1> */}
            <div>
                <div className='flex flex-end items-center w-[100%] h-[23vh] md:h-[30vh] lg:h-[59vh] xl:h-[57vh] 2xl:h-[80vh] overflow-hidden relative'>
                    <img src="../splash.jpg" className='w-full absolute top-[-50px] md:top-[-115px] lg:top-[-120px] xl:top-[-145px] 2xl:top-[-230px]' />
                    <div className='flex flex-col'>
                        <h1 className='relative z-1 text-[2.7rem]'>New Food. Familiar Place.</h1>
                        <h2 className='relative z-1'>Cook meals from our recipe boxes in the comfort of your own home</h2>
                    </div>
                    <div className='m-4'></div>
                </div>
                
                <div>
                    <Carousel responsive={responsive}>
                        <div>Item 0</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                        <div>Item 5</div>
                    </Carousel>
                </div>
            </div> 
        </Layout>
    )
}
 
export default Landing;