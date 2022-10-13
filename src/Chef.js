class Chef {
  constructor(name, restaurant) {
    this.name = name
    this.restaurant = restaurant
  }
  greetCustomer(customerName, bool) {
    return bool
    ? `Good morning, ${customerName}!`
    : `Hello, ${customerName}!`
  }

  checkForFood(foodItem) {
    return this.restaurant.menus[foodItem.type].some(el => el.name === foodItem.name)
    ? `Yes, we're serving ${foodItem.name} today!`
    : `Sorry, we aren't serving ${foodItem.name} today.`
  }
}

module.exports = Chef;
