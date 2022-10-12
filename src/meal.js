function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {name, price, type}
}

const addIngredients = function(ingredient, arr) {
  return arr.includes(ingredient) ?  arr :  arr.push(ingredient)
}

const formatPrice = function(price) {
  return `$${price}`
}

const decreasePrice = (price) => price * .9

const createRecipe = (title, ingredients, type) => {
  return {title, ingredients, type}
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
