import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GitExpertApp = (props) => {
    
    // const handleAdd = () =>  {
    //     //setCategories( [...categories, 'Hunter X'] )
    //     setCategories( cats => [...categories, 'Hunter X'] )
    // }

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />  
            <ol>
                { 
                    categories.map( (category, i )=> (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GitExpertApp
