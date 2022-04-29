const reconcileOrder (array, object) => {
    let existingBook = [...array]
    let incomingOrder = [...object]

    let procuredArray = []
    let nonProcuredArray = [] 

    if(existingBook.length === 0){
        nonProcuredArray.push(incomingOrder)

        return nonProcuredArray
    }

    

    return [...nonProcuredArray, ...procuredArray]

}

module.exports = reconcileOrder


// // Take in buy and sell orders 
// const addNewOrder = (exsistingBook, incomingOrder) => {
//     return [...exsistingBook, incomingOrder]
// }

// const compareTypes = (exsistingBook, incomingOrder) => {
//     let oppositeType = exsistingBook.filter(order => order.type !=== incomingOrder.type)
//     let sameType = exsistingBook.filter(order => order.type === incomingOrder.type)

//     if (oppositeType.length === 0){
//         return addNewOrder(exsistingBook, incomingOrder)
//     } if (oppsiteType === 'true') {
//         return addNewOder(exsistingBook, incomingOrder)
//     }
//     else {
//         let potentialMatch = false
//         let order 
//         let 
//     }
// }

// const comparePrice = (existingBook, incomingOrder) => {
//     for (const price in incomingOrder){
//         if(typeof incomingOrder[price]=== 'object'){
//             //compare the prices in existingBook and incomingOrder

//             //if incomingOrder price is less than price in exsistingBook, make sale. 
//             //then incomingOrder.assign(price) ---> exsistingBook.price - incomingOrder.price
//             //then compare incomingOrder.quantity to exsistingBook.quantity

//             //if incomingOrder price is === exsistingBook.price, make sale, do not update the

//         }
//     }
// }


// const reconcileOrder = (existingBook, incomingOrder) => {
//   // loop through the array of existingBook, look at the value of type
//   // and price

//   for(const price in object){
//       if(typeof object[price] === 'object'){
//           if(contains(object[price]), )
// //       }
//   }
//   // (if incomingOrder.type !== existingorder.type) && (incomingOrder.price === exsistingOrder.price)

//   // make the sale, push in the updated value to exsistingorder (if there is any), and push the remaining
//   // value of incomingOrder, and change it to exisistingOrder

// }

// if customer submits a trade that matches an order in the order book, it is fullfilled immediately
// Matching order: when there is a buy bitcoin order that is equal to the sell bitcoin order 
// Type cannot match
// incomingOrder.type !== existingorder.type
// incomingOrder.price === exsistingOrder.price
// if order book is empty:
// .push() into empty object of exsistingOrder
// incomingOrder.push()

// taking the lesser of the two quan and that equals the amount of the deal 

// exsistingBook{
// Type: 
// Quanity:
// Price:
// }

// if no matching trade, added to book to be fulfilled
// assume that you are starting with an empty book

// multi functional 
// function needs to store values for later 
// function that I create stores the values in an object within another object to be grabbed later 
