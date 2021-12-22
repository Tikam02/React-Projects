import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile({recipe}){
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
            <div className='recipeTile'>
            <img className='RecipeTile_img' src={recipe["recipe"]["image"]}/>
            <p className='RecipeTile_name'>{recipe["recipe"]["label"]}</p>         
            </div>

        )

    );
}
