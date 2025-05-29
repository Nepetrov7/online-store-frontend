export const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => {
        const qty = isNaN(item.quantity) ? 1 : item.quantity;
        return sum + item.price * qty;
    }, 0);
};
