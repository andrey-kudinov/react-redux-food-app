const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};

const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id,
  };
};

export { menuLoaded, menuRequested, addedToCart };
