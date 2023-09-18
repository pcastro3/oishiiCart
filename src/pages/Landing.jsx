import Layout from "../components/Layout";

import '../index.css';

function Landing() {
    return (
        <Layout >
            <h1 className='bg-blue-600 text-6xl p-5'>The Landing Page</h1>
            <div>
                <div>SPLASH IMAGE</div>
                <p>New Food. Familiar Place</p>
                <p>Cook meals from our recipe boxes in the comfort of your own home</p>
            </div> 
        </Layout>
    )
}
 
export default Landing;