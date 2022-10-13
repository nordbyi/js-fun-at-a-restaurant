function createRestaurant(name, menuObj = {breakfast: [], lunch : [], dinner : []}) {
  return {
    name,
    menus: menuObj
  }
}

const addMenuItem = function(restaurant, item) {
  restaurant.menus[item.type].includes(item)
  ? restaurant
  : restaurant.menus[item.type].push(item)
}

const removeMenuItem = (restaurantObj, itemName, itemType) => {
  var mealArr = restaurantObj.menus[itemType]
  if(!mealArr.some(el => el.name === itemName)) {
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  } else {
    mealArr.splice(mealArr.findIndex(el => el.name === itemName) ,1)
    return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
}
