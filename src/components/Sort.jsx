import React from 'react';

function Sort({onSort}) {

  function changeMethod(e){
    const value = e.target.value;
    onSort(value);
  }  

  return (
    <article className='sort'>
        <label htmlFor="sort"></label>
        <select id="sort" onChange={changeMethod}>
            <option value="">---</option>
            <option value="a-to-z">A-Z</option>
            <option value="z-to-a">Z-A</option>
            <option value="price-up">Price Up</option>
            <option value="price-down">Price Down</option>
        </select>
    </article>
  )
}

export default Sort;