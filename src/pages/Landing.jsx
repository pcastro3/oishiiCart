import Layout from "../components/Layout";

import '../index.css';

function Landing() {
    return (
        <Layout >
            <h1 className='bg-blue-600 text-6xl p-5'>The Landing Page</h1>
            <div>
                <div className='w-[100%] h-[50rem] overflow-hidden'>
                    <img src="../splash.jpg" className='w-full'/>
                </div>
                <p>New Food. Familiar Place</p>
                <p>Cook meals from our recipe boxes in the comfort of your own home</p>
            </div> 
        </Layout>
    )
}
 
export default Landing;