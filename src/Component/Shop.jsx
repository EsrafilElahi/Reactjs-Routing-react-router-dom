import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


function ContactUS () {

    const shopStyle={
        color: "#f98404",
        titleColor: {color: "#fc5404"},
        fontSize: "15px",
        textDecoration: "none"
    }

    const APP_ID = 'deee8235'
    const APP_KEY = 'a120c60d67ebdf17671fe19f0dc04ef0'

    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        fetchItems();
    },[])

    const fetchItems = async () => {
        const res = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`)
        const data = await res.json();
        setRecipes(data.hits)
        
    }

  return (
    <div>
      <h1 style={shopStyle.titleColor}>Shop Page</h1><hr/>
        {
            recipes.map((recipe) => (
                <h3 key={recipe.recipe.calories}>
                    <Link to={`/shop/${recipe.recipe.calories}`} style={shopStyle}>{recipe.recipe.label}</Link>
                </h3>
            ))
        }

    </div>
  )
}

export default ContactUS
