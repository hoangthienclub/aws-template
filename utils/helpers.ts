export const getFulfillmentCenter = (countryCode: string) => {
	let fulfillmentCenter = "3PLs";
	if (countryCode != "US") {
			fulfillmentCenter = "PCH International";
	}
	return fulfillmentCenter;
}