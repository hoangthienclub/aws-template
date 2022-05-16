import constants from "../utils/constant";

export const compileMessage = (message: any, params: any) => {
  if (params) {
    Object.keys(params).forEach((key) => {
      const regex = new RegExp(`<${key}>`);
      message = message.replace(regex, params[key]);
    });
  }
  return message;
};

export const mapRegion = (country: string) => {
	for (const i in constants.regions) {
		if (constants.regions[i].countries.includes(country)) {
			return constants.regions[i].region;
		}
	}
	return "Rest of World";
};

export default {
  compileMessage,
  mapRegion
};
