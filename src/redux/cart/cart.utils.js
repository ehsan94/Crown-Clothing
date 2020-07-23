 const addItemToCart = (cardItems, cardItemToAdd) =>{
    const existingCardItem = cardItems.find(
        cartItem => cartItem.id === cardItemToAdd.id
    );

    if(existingCardItem) {
        return cardItems.map(cartItem => 
            cartItem.id === cardItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} :cartItem
            )
    }

    return [...cardItems, {...cardItemToAdd , quantity:1}]

}

export default addItemToCart;

