import Layout from "../components/Layout";

import '../index.css';

function Landing() {
    return (
        <Layout >
            {/* <h1 className='bg-blue-600 text-6xl p-5'>The Landing Page</h1> */}
            <div>
                <div className='w-[100%] h-[23vh] md:h-[30vh] lg:h-[59vh] xl:h-[57vh] 2xl:h-[80vh] overflow-hidden relative'>
                    <img src="../splashimage.jpg" className='w-full absolute top-[-50px] md:top-[-115px] lg:top-[-120px] xl:top-[-145px] 2xl:top-[-230px]' />
                </div>
                <p>New Food. Familiar Place</p>
                <p>Cook meals from our recipe boxes in the comfort of your own home</p>
            </div> 
        </Layout>
    )
}
 
export default Landing;