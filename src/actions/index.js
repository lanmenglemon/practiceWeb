export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export const SEND_EMAIL = 'SEND_EMAIL';

export const TEMPLATE_DIRECTORY = "../templates";
export const SENDER_EMAIL_ADDRESS = "bw243@njit.edu";
export const AWS_REGION = "eu-west-1";
export const AWS_ACCESS_KEY_ID = "AKIAIIL7UOQECZHC27MA";
export const AWS_SECRET_ACCESS_KEY="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";

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
