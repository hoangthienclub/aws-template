import { success, failure } from "./response";
import { BusinessError, TechError, ValidationError, DBError } from "./errors";
import constant from "../utils/constant";
import { getMessages } from "../locales";
import { MongoDB } from '../core/db';


const mapError = (error: any, language: string, code?: any) => {
  const messages: { [key: string]: any } = getMessages(language);
  let message = messages[error.key || constant.generalMessageKey];
  let details;
  const data = error.data;
  //map detail
  try {
    if (error.messageDetail) {
      Object.keys(error.messageDetail).forEach((element: any) => {
        message = message.replace(`<${element}>`, error.messageDetail[element]);
      });
    }
    if (error.details) {
      details = error.details.map(
        ({
          key: eleKey,
          message: eleMessage,
          messageDetail: eleMessageDetail,
        }: {
          key: string;
          message: string;
          messageDetail: any;
        }) => {
          let eleNewMessage = messages[eleMessage] || eleMessage;
          //map ele detail
          if (eleMessageDetail) {
            Object.keys(eleMessageDetail).forEach((element: any) => {
              eleNewMessage = eleNewMessage.replace(
                `<${element}>`,
                eleMessageDetail[element]
              );
            });
          }
          return {
            key: eleKey,
            message: eleNewMessage,
          };
        }
      );
    }
  } catch (err) {
  }
  if (!message) {
    message = messages[constant.generalMessageKey];
  }
  return { message, details, code, data };
};

export const postFailProcess = async (
  error: any,
  event: any,
  context: any,
  callback: any
) => {
  await new MongoDB().close();
  let errorObj;
  const { message, details, code, data } = mapError(
    error,
    event.headers?.language ?? constant.defaultLanguage
  );
  errorObj = { message, details: details ? details : undefined };
  failure(errorObj.message, errorObj.details, callback, code, data);
};

export const postSuccessProcess = async (
  result: any,
  event: any,
  context: any,
  callback: any
) => {
  await new MongoDB().close();
  success(result, callback);
};
