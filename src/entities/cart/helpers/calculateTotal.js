export const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
};
