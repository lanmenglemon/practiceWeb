import axios from 'axios';
export const CHANGE_SELECTED_TAB = 'CHANGE_SELECTED_TAB';
export const SEND_EMAIL = 'SEND_EMAIL';


export function sendEmail(values) {
  console.log("email sent");
  axios({
              method: 'post',
              url: '/contactUs',
              data: {
                name: values.Name,
                email: values.Email,
                subject: values.Subject,
                message: values.Message
              }
            })
            .then(function (response) {
                alert("Email Sent Successfully!");
              })
            .catch(function (error) {
                alert("Something goes wrong!");
                console.log(error);
            });
  return { type: SEND_EMAIL, payload: values };
}
