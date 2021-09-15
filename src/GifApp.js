import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifApp = () => {

    
    const [categories, setCategories] = useState(['Luffy']);

   /* const handleAdd = ()=>{
        //manteniendo categorias anteriores e implementando nueva
        setCategories(['HunterXHunter',...categories]);
    }
*/

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />
            

            <ol>
                {
                    categories.map(category =>
                         <GifGrid category={category} key={category} />
                    )
                    }
            </ol>
        </>
    );
}

export default GifApp;