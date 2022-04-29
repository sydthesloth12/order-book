const reconcileOrder = (array, object) => {
    let existingBook = [...array]
    let currentOrder = {...object}

    let procuredArray = []
    let nonProcuredArray = [] 

    if(existingBook.length === 0){
        nonProcuredArray.push(currentOrder)

        return nonProcuredArray
    }

    existingBook.forEach(existingOrder =>{
        if(reqTypesMatch(existingOrder, currentOrder) && reqPriceMet (existingOrder, currentOrder)){
            let dealQuantity = Math.min(existingOrder.quantity, currentOrder.quantity)
            
            existingOrder.quantity= existingOrder.quantity - dealQuantity 

            currentOrder.quantity= currentOrder.quantity - dealQuantity
            
            
            if(existingOrder.quantity > 0){
                procuredArray.push(existingOrder)
                
            } 

        } else {
           nonProcuredArray.push(existingOrder) 
        } 
    }) 

    if(currentOrder.quantity > 0){
        procuredArray.push(currentOrder)
    }


    return [...nonProcuredArray, ...procuredArray]

}

const reqTypesMatch = (existingOrder, currentOrder) => {
    return existingOrder.type !== currentOrder.type
}

const reqPriceMet = (existingOrder, currentOrder) => {
    if(existingOrder.type === 'sell' && existingOrder.price <= currentOrder.price){
        return true
    } if (currentOrder.type === 'sell' && currentOrder.price <= existingOrder.price){
        return true
    } return false 
  

}

module.exports = reconcileOrder
