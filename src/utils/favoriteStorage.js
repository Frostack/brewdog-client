import Cookies from 'js-cookie';

export const addFavoriteItem = itemID => {
  let favorites = Cookies.getJSON('favorites') || [];
  favorites.push(itemID);
  Cookies.set('favorites', favorites, { expires: 30 });
};

export const removeFavoriteItem = itemID => {
  const favorites = Cookies.getJSON('favorites');
  if (!favorites) return;
  const newList = favorites.filter(item => item !== itemID);
  Cookies.set('favorites', newList, { expires: 30 });
};

export const favoriteHasItem = itemID => {
  const favorites = Cookies.getJSON('favorites');
  if (!favorites) return false;
  return favorites.some(id => id === itemID);
};
