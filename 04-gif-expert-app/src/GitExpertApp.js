import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GitExpertApp = (props) => {
    
    // const handleAdd = () =>  {
    //     //setCategories( [...categories, 'Hunter X'] )
    //     setCategories( cats => [...categories, 'Hunter X'] )
    // }

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />  
            <ol>
                { 
                    categories.map( (category, i )=> {
                        return <li key={ category }>{ category }</li>
                    })
                }
            </ol>
        </div>
    )
}

export default GitExpertApp
