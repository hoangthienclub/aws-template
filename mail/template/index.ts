import confirmationEmail from "./confirmationEmail";

export default (code: string) => {
  switch (code) {
    case "CONFIRMATION_MAIL":
      return confirmationEmail;
    default:
      break;
  }
};
