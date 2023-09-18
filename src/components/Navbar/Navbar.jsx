import NavSearch from "./NavSearch";

function NavBar() {
    const handleSubmit = (term) => {
        //Handle user's search input
        console.log('search with', term);
    }

    return (
        <div>
            <nav className='pt-2 md:pt-4'>
                <div className='flex pb-2'>
                    <div className='flex w-[40%] md:w-[70%] xl:w-[80%] md:justify-between text-base'>
                        <a href="/" className='rounded-full flex items-center ml-4'>
                            <a><img src="https://clipart-library.com/data_images/16889.png" width="192" height="120" className='w-16' /></a>
                            <h1 className='hidden lg:flex'>OISHIICART</h1>
                        </a>
                        <div className='hidden md:flex'>
                        <NavSearch onSubmit={handleSubmit} />
                        </div>
                    </div>

                    <div className='flex justify-center items-center w-[60%] md:w-[30%] xl:w-[20%] lg:justify-center text-lg font-medium'> 

                        <a className='flex rounded-full text-white p-1 h-12 pl-4 items-center'>
                            <img className='h-5' src='../../../icons8-cart-24.png'></img>
                        </a>
                        <a className='
                            rounded-full text-black whitespace-nowrap ml-1 mr-2 p-1
                            '>Log In</a>
                        <a className='
                            rounded-full bg-red-600 text-white whitespace-nowrap mr-2 p-1 px-2
                            '>Sign Up</a>
                    </div>
                </div>

                <div className='flex md:hidden justify-center'>
                    <NavSearch onSubmit={handleSubmit} />
                </div>

            </nav>
        </div>
        
    )
}

export default NavBar;