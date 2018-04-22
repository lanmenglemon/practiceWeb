export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export const SEND_EMAIL = 'SEND_EMAIL';


export function changeSelectedTab(selectedTab) {
    return {
        type: CHANGE_SELECTED_TAB,
        tab: selectedTab
    };
}


export function sendEmail(values, callback) {

    console.log("email sent");
    return {
      type: SEND_EMAIL,
      payload: values
    };

}
