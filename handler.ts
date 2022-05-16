import preProcess from "./core/preProcess";
import { postFailProcess, postSuccessProcess } from "./core/postProcess";
import shipmentController from "./controllers/shipment";

const wrapper = (func: any) => (event: any, context: any, callback: any) => {
  (async () => {
    try {
      ({ event, context } = await preProcess(event, context));
      let res;
      if (event.headers && event.headers.preWarmed) {
        res = {};
      } else {
        res = await func(event, context);
      }
      await postSuccessProcess(res, event, context, callback);
    } catch (error) {
      console.log("call api error", error);
      await postFailProcess(error, event, context, callback);
    }
  })();
};
export const test = wrapper(shipmentController.test);