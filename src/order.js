function takeOrder(order, orderArr) {
  orderArr.length >= 3 ? orderArr.splice(3) : orderArr.push(order)
}

const refundOrder = function(orderToRemove, orderArr) {
  orderArr.splice(orderArr.findIndex(el => el.orderNumber === orderToRemove), 1)
}

const listItems = (arr) => {
  var str = ''
  arr.forEach((obj, index) => {
    if(index === arr.length - 1) {
      str += `${obj.item}`
    } else {
      str += `${obj.item}, `
    }
  })
  return str
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
