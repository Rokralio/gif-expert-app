import { useState } from "react";



export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch','Dragon Ball']);

  const onAddCategory = () => {
    // categories.push('Valorant'); // esto muta el  arreglo

    setCategories([...categories, 'Valorant']);
    // setCategories(categories => [...categories, 'Valorant']);
  };

  return (
    <div>
      <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Listado de gif */}
        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
          { categories.map( category => <li /* las keys tienen que ser unicas */key={ category }>{ category }</li>) }
        </ol>
        {/* Imput */}
        {/* Gif Item */}
      </>
    </div>
  );
};

export default GifExpertApp;
