import { Mapper } from '../../core/mapper'
import { SampleData } from '../../interface/sampleData';
import { SampleDataEntity } from '../../repository/entities/sampleDataEntity';



export class SampleDataMapper extends Mapper<SampleData, SampleDataEntity>{

    mapFrom(param: SampleData): SampleDataEntity {

        return {
            id: param.id,
            objectName: param.objectName,
            sampleData: param.sampleData,
            provider:param.provider,
            organization: param.organization,
            aggregateType: param.aggregateType,
            created: param.created,
            createdBy :param.createdBy
        }

    }


    mapTo(param: SampleDataEntity): SampleData {

        return {
            id:param.id,
            objectName: param.objectName,
            aggregateType: param.aggregateType,
            provider:param.provider,
            sampleData: param.sampleData,
            organization: param.organization,
            created: param.created,
            createdBy :param.createdBy
        }
    } 

    
}