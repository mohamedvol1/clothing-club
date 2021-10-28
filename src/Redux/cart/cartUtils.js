

export const addItemsToCart = (currentCartItmes, itemToAdd) => {
  const isItemExists = currentCartItmes.find(item => item.id === itemToAdd.id)

  if (!isItemExists) {
    return [...currentCartItmes, {...itemToAdd, quantity: 1}]
  } else {

    return currentCartItmes.map(item => {
      if (item.id === itemToAdd.id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
  
  }
} 

export const removeItemFromCart = (currentCartItmes, itemToDelete) => {
  return currentCartItmes.filter(item => item.id !== itemToDelete.id)
}

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  return cartItems.reduce((newCartItems, item) => {
    if (item.id === itemToDecrease.id) {
      if (item.quantity !== 1) {

        newCartItems.push({...item, quantity: item.quantity - 1});
      } 

    } else {
      
      newCartItems.push(item)
     
    }
        
    return newCartItems

  }, [])
}
