import React, { useState } from 'react'
import PropTypes from 'prop-types'

const GitExpertApp = props => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball']

    const handleAdd = () =>  {
        //setCategories( [...categories, 'Hunter X'] )
        setCategories( cats => [...categories, 'Hunter X'] )
    }

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>
            
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

GitExpertApp.propTypes = {

}

export default GitExpertApp
