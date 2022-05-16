import { Base } from './base';

export interface SampleData extends Base {
    objectName?:     String,
    aggregateType?:  String,
    provider?:       String,
    sampleData ?:    Object
}