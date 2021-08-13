const initialState = {
  menu: [],
  loading: true,
  items: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        menu: state.menu,
        loading: true,
      };

    case "ITEM_ADD_TO_CART":
      const id = action.payload;
      const itemsArr = state.items.filter((item) => item.id === id);
      if (!itemsArr.length) {
        const item = state.menu.find((item) => item.id === id);
        const newItem = {
          title: item.title,
          price: item.price,
          url: item.url,
          id: item.id,
          count: 1,
        };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }

      const item = itemsArr[0];
      item.count = itemsArr.length + item.count;
      const itemIdx = state.items.findIndex((item) => item.id === id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIdx),
          ...state.items.slice(itemIdx + 1),
          item,
        ],
      };

    case "ITEM_REMOVE_FROM_CART":
      const idx = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === idx);

      const itemRemove = state.items.find((item) => item.id === idx);
      if (itemRemove.count > 1) {
        itemRemove.count--;
        return {
          ...state,
          items: [...state.items],
        };
      }
      return {
        ...state,
        items: [
          ...state.items.slice(0, itemIndex),
          ...state.items.slice(itemIndex + 1),
        ],
      };
    case "CHANGE_TOTAL":
      const total = state.total + action.payload;
      return {
        ...state,
        total,
      };
    case "LOAD_TOTAL":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
