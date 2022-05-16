
import { RepositoryAbstract } from './repositoryMethod'

export interface SampleDataInterface extends RepositoryAbstract{

    getLatestSampleData(query:any):Promise<any>;


}