const success = (
  data: any,
  callback: any,
  responseCode = 200,
  statusCode = 200
) => {
  const response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify({
      message: "Success",
      code: responseCode,
      data,
    }),
  };
  console.log("response", response);
  callback(null, response);
};
const failure = (
  error: any,
  errorDetail: any,
  callback: any,
  errorCode = 500,
  data: any,
  statusCode = 200
) => {
  console.log("Error: ", error);
  const response = {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify({
      message: error,
      code: errorCode || 500,
      data,
      errors: errorDetail
    }),
  };
  callback(null, response);
};

export { success, failure };
