import { useState } from "react";
import { AddCategory } from "./components/AddCategory";



export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch','Dragon Ball']);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return;

    // categories.push('Valorant'); // esto muta el  arreglo
    setCategories([ newCategory, ...categories ]);
    // setCategories(categories => [...categories, 'Valorant']);
  };

  return (
    <div>
      <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Imput */}
        <AddCategory
          // setCategories={ setCategories } 
          onNewCategory = { ( value ) => onAddCategory( value ) }
        />
        {/* Listado de gif */}
        <ol>
          { categories.map( category => <li /* las keys tienen que ser unicas */key={ category }>{ category }</li>) }
        </ol>
        {/* Gif Item */}
      </>
    </div>
  );
};

export default GifExpertApp;
