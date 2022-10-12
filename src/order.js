function takeOrder(order, orderArr) {
  return orderArr.length >= 3 ? orderArr.splice(3) : orderArr.push(order)
}
//Don't you try to give me an array that's already more than 3 orders! Don't do it! I'll splice() ya!

const refundOrder = function(orderToRemove, orderArr) {
  // return orderArr.filter(order => order.orderNumber !== orderToRemove)
  // mean test wants the original array back... :(
  var indexPosition = null;
  for(var i = 0; i < orderArr.length; i++){
    if(orderArr[i].orderNumber === orderToRemove) indexPosition = i
  }
  return orderArr.splice(indexPosition, 1)
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
