import NavBar from "./Navbar/Navbar";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className='mt-4'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout