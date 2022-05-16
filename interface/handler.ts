import { APIGatewayProxyEvent } from "aws-lambda";

export interface Event extends APIGatewayProxyEvent {
  currentUser: any;
  body: any;
  params: any;
  query: any;
}
