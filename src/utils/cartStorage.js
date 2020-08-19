import Cookies from 'js-cookie';

export const addCartItem = itemID => {
  let cart = Cookies.get('cart') || '';
  cart += `${itemID}|`;
  Cookies.set('cart', cart, { expires: 7 });
};

export const removeCartItem = itemID => {
  const cart = Cookies.get('cart');
  if (!cart) return;
  const newCart = cart.replace(`${itemID}|`, '');
  Cookies.set('cart', newCart, { expires: 7 });
};

export const cartHasItem = itemID => {
  const cart = Cookies.get('cart');
  if (!cart) return false;
  return cart.split('|').some(id => +id === itemID);
};
