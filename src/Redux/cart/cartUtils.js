

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

