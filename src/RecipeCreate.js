import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [photo, setPhoto] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [preparation, setPreparation] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const newRecipe = {
        id: Date.now(),
        name: name,
        cuisine: cuisine,
        photo: photo,
        ingredients: ingredients,
        preparation: preparation,

      };
      addRecipe(newRecipe)
      setName("");
      setCuisine("");
      setPhoto("");
      setIngredients("");
      setPreparation("");
  };
  
  return (
    <form name="create" onSubmit ={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
                />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
                />
            </td>
            <td>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
