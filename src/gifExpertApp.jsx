import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./GifGrid";



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
        <h1>GifExpertApp</h1>

        <AddCategory
          onNewCategory = { ( value ) => onAddCategory( value ) }
        />

        { 
          categories.map( category => (
            <GifGrid 
              key={ category }
              category={ category }/> 
          ))
        }
      </>
    </div>
  );
};

export default GifExpertApp;
