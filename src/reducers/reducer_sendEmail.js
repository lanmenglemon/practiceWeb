import { SEND_EMAIL } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return action.payload;
  }
  return state;
}
