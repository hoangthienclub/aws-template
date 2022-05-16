import Joi from "joi";

const getShipments = Joi.object({
	customerId: Joi.string(),
	channelPartner: Joi.string(),
	pageSize: Joi.number(),
	page: Joi.number(),
});


export default {
	getShipments,
};
