import { MENU_TOGGLE_ACTIVE } from "../constants/menuConstants";

export const menuReducer = (state = {}, action) => {
  switch (action.type) {
    case MENU_TOGGLE_ACTIVE:
      return {
        menuLinks: action.payload,
      };
    default:
      return state;
  }
};
