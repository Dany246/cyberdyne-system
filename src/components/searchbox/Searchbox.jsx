import React from 'react';

const Searchbox = ({searchChange}) =>{
    return(
        <input className='kereso'
         type="search"
          placeholder='Model keresés..'
          onChange={searchChange}
           />
    );
}
export default Searchbox;