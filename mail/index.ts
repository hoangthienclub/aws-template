import constant from "../utils/constant";
import template from "../mail/template";
import WhiteLabel from "../model/whiteLabel";
import _ from "lodash";
import AWS from "aws-sdk";
const SNS = new AWS.SNS();
import db from "../core/db";

export default {
  sendMail: async (
    code: any,
    emailTo: any[],
    params: { body: any; subject?: any; inline_images?: any },
    domain?: any,
    bcc?: any[] | null,
    cc?: any[] | null
  ) => {
    const tl: any = template(code);
    var compiledBody = _.template(tl.body);
    var compiledSubject = _.template(tl.subject);
    if (params.body) {
      params.body.isDineInOrder = params.body.isDineInOrder || false;
      params.body.year = new Date().getFullYear();
    }
    const whiteLabelSetting = await WhiteLabel.getWhiteLabel();
    const configs = !Object.values(whiteLabelSetting).every(
      (value) => value === null
    )
      ? whiteLabelSetting
      : constant.emailConfig;
    const content: {
      subject: any;
      html: any;
      headers?: any;
      inline_images?: any;
    } = {
      subject: compiledSubject({ ...params.subject }),
      html: compiledBody({ ...params.body, ...configs }),
    };
    let recipients: any[] = [];
    recipients = recipients.concat(
      emailTo.map((res: any) => ({ address: { email: res } }))
    );
    if (bcc) {
      recipients = recipients.concat(
        bcc.map((res: any) => ({
          address: { email: res, header_to: emailTo.join(", ") },
        }))
      );
    }
    if (cc) {
      recipients = recipients.concat(
        cc.map((res: any) => ({
          address: { email: res, header_to: emailTo.join(", ") },
        }))
      );
      content.headers = { CC: cc.join(", ") };
    }
    if (params.inline_images) content.inline_images = params.inline_images;
    return new Promise(
      (resolve: (arg0: any) => void, reject: (arg0: any) => void) => {
        try {
          const params = {
            type: 1,
            subject: content.subject,
            body: content.html,
            recipients,
            headers: content.headers,
            inlineImages: content.inline_images,
          };
          SNS.publish(
            {
              TopicArn: constant.notificationTopicArn,
              Message: JSON.stringify(params),
            },
            (error: any, data: any) => {
              if (error) {
                reject(error);
              } else {
                resolve(data);
              }
            }
          );
        } catch (err) {
          console.log("push errors", err);
          reject(err);
        }
      }
    );
  },
};
