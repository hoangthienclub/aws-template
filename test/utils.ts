const CODE_SUCCESS = 200;
const CODE_FAILURE = 500;

export const checkResponseSuccess = (response: any) => {
  const { code, data } = response;
  return CODE_SUCCESS === code && !!data;
};

export const checkResponseFailure = (response: any) => {
  const { code, message } = response;
  return CODE_FAILURE === code && !!message;
};

export default {
  checkResponseSuccess,
  checkResponseFailure,
};
