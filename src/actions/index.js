export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';

export function changeSelectedTab(selectedTab) {
    return {
        type: CHANGE_SELECTED_TAB,
        tab: selectedTab
    };
}
