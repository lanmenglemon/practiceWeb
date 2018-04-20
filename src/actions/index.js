export const ITEM_SELECTED = "item_selected";

export function selectNaviBarItem(item) {
  return {
    type: ITEM_SELECTED,
    payload: item
  };
}
