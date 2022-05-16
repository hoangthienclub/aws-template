import controllerWrapper from "../core/controllerWrapper";
import SampleDataModel from '../repository/models/sampleDataModel';
import { Event } from "../interface/handler";
import constant from "../utils/constant";

export default {
	test: controllerWrapper(
		async function (req: Event, context: any) {
			// prepare data
			const exampleData = {
				id: 'test',
				objectName: 'test',
				sampleData: 'test',
				provider:'test',
				organization: 'test',
				aggregateType: 'test',
				created: new Date(),
				createdBy :'test',
			}

			await new SampleDataModel(exampleData).save();
			return {};
		},
		{
			service: "",
			target: "",
			action: "",
		},
		{
			// query: 
			// params: ,
			// body: ,
		}
	),
};
