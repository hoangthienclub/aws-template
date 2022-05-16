import en from "../locales/notification/en.json"
import vi from "../locales/notification/vi.json"
import zh from "../locales/notification/zh.json"
import {compileMessage} from "./helpers";

export const buildNotification = (key: string, data: any, code?: any) => {
    
    let source:any;
    switch (code) {
        case 'vi-VN':
            source = vi
        case 'zh-CN':
            source = zh
        default:
            source = en
    }
    let notification = source[key]
    return {
        title: notification.title,
        body: compileMessage(notification.body, data),
        code: key,
        data
    }
}

export default {
    buildNotification
}