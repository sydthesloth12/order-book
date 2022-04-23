//Take in buy and sell orders 

const reconcileOrder = (existingBook, incomingOrder) => {
    //loop through the array of existingBook, look at the value of type
    //and price

    //(if incomingOrder.type !== existingorder.type) && (incomingOrder.price === exsistingOrder.price)

    //make the sale, push in the updated value to exsistingorder (if there is any), and push the remaining
    //value of incomingOrder, and change it to exisistingOrder

}
//if customer submits a trade that matches an order in the order book, it is fullfilled immediately
//Matching order: when there is a buy bitcoin order that is equal to the sell bitcoin order 
//Type cannot match
// incomingOrder.type !== existingorder.type
// incomingOrder.price === exsistingOrder.price
// if order book is empty:
// .push() into empty object of exsistingOrder
// incomingOrder.push()

//taking the lesser of the two quan and that equals the amount of the deal 

//exsistingBook{
// Type: 
// Quanity:
// Price:
//}

//if no matching trade, added to book to be fulfilled
//assume that you are starting with an empty book

//multi functional 
//function needs to store values for later 
//function that I create stores the values in an object within another object to be grabbed later 