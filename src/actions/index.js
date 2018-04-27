import axios from 'axios';
export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export const SEND_EMAIL = 'SEND_EMAIL';


export function sendEmail(values) {
  console.log("email sent");
  axios({
              method: 'post',
              url: '/contact',
              data: {
                email: values.email,
                subject: values.subject,
                message: values.message
              }
            })
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
  return { type: SEND_EMAIL, payload: values };
}
