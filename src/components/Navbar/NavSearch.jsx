import { useState } from 'react';

function NavSearch({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    }

    const handleChange = (event) => {
        event.preventDefault();

        setTerm(event.target.value)
    }

    return (
        <div className='flex justify-center'>
            <form className='flex items-center w-[80%] md:w-full pr-4 pl-4 h-12 bg-slate-100 rounded-full' onSubmit={handleFormSubmit}>
                <img src='../../icons8-search.svg' className='h-6'></img>
                <input className='bg-slate-100 pl-4 w-[90vw] md:w-[45vw] xl:w-[60vw]' value={term} onChange={handleChange} placeholder="Search Recipes"/>
            </form>
        </div>
    )
}

export default NavSearch;