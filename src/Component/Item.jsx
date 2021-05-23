import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

function ContactUS ({ match }) {
  const shopStyle = {
    color: '#f98404'
  }

  const APP_ID = 'deee8235'
  const APP_KEY = 'a120c60d67ebdf17671fe19f0dc04ef0'

  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=1&calories=${
        match.params.id
      }&health=alcohol-free`
    )
    const data = await res.json()
    setRecipe(data.hits[0].recipe)
  }

  return (
    <div>
      <h1 style={shopStyle}>{recipe.label}</h1>
      <img src={recipe.image} />
    </div>
  )
}

export default ContactUS
