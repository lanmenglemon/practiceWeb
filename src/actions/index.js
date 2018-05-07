import axios from 'axios';
export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const SEND_EMAIL = 'SEND_EMAIL';


export function sendEmail(values) {
  var data = {
                name: values.Name,
                email: values.Email,
                subject: values.Subject,
                message: values.Message
              };
  const req = axios.post('/contactUs', data)
            .then(function (response) {
                alert("Email Sent Successfully!");
                window.location.reload();
              })
            .catch(function (error) {
                alert("Something goes wrong!");
                console.log(error);
            });
  console.log(req);
  return { type: SEND_EMAIL, payload: req };
}

export function selectImage(image) {
  return {
    type: "IMAGE_SELECTED",
    payload: image
  };
}
