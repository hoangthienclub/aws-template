//@ts-ignore
import multipart from 'parse-multipart';
import { MongoDB } from '../core/db';

export default async (event: any, context: any) => {
  if (event.requestContext && event.requestContext.authorizer) {
    const claims =
      event.requestContext.authorizer.claims ?? event.requestContext.authorizer;
    event.currentUser = {
      username: claims["cognito:username"],
      userId: claims["custom:userId"],
      familyName: claims.family_name,
      givenName: claims.given_name,
      phone: claims["custom:phone"],
      email: claims.email,
    };
  }

  if (event.body && typeof event.body === "string") {
    const contentType =
      event.headers["content-type"] || event.headers["Content-Type"];
    if (contentType.includes('multipart/form-data')) {
      const boundary = multipart.getBoundary(contentType);
      event.body = multipart.Parse(event.body, boundary);
    } else {
      event.body = JSON.parse(event.body);
    }
  }

  if (event.path && typeof event.path !== "string") {
    event.params = JSON.parse(JSON.stringify(event.path));
  } else if (event.pathParameters) {
    event.params = JSON.parse(JSON.stringify(event.pathParameters));
  } else {
    event.params = {};
  }

  if (event.queryStringParameters) {
    event.query = JSON.parse(JSON.stringify(event.queryStringParameters));
  }

  if (event.headers) {
    if (event.headers.accesstoken) {
      event.headers.AccessToken = event.headers.accesstoken;
    }
    if (event.headers.platformtype) {
      event.headers.platformType = event.headers.platformtype;
    }
    if (!event.headers.language) {
      event.headers.language = "en-US";
    }
    if (event.headers.isTabletUser == "true" || event.headers.istabletuser == "true") {
      event.headers.isTabletUser = true;
    }
  }

  if ((!event.headers.origin || !event.headers.Origin) && (event.headers.Referer || event.headers.referer)) {
    event.headers.origin = (event.headers.Referer || event.headers.referer).endsWith("/") ? (event.headers.Referer || event.headers.referer).slice(0, -1) : (event.headers.Referer || event.headers.referer)
  }

  await new MongoDB().connect();
  console.log("Headers: ", JSON.stringify(event.headers));
  console.log("Parameters: ", JSON.stringify(event.params));
  console.log("Query: ", JSON.stringify(event.query));
  console.log("Body: ", JSON.stringify(event.body));
  console.log("Current User", JSON.stringify(event.currentUser));

  return { event, context };
};
