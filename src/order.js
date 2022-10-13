function takeOrder(order, orderArr) {
  orderArr.length >= 3 ? orderArr.splice(3) : orderArr.push(order)
}

const refundOrder = function(orderToRemove, orderArr) {
  orderArr.splice(orderArr.findIndex(el => el.orderNumber === orderToRemove), 1)
}

const listItems = (arr) => {
  return items = arr.map(el => el.item).join(', ')
}

const searchOrder = (orderArr, orderItem) => {
  return orderArr.some(order => order.item === orderItem)
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
