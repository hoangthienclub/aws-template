

import moment from 'moment';
import { SampleDataInterface } from '../../interface/sampleDataInterface'
import  sampleDataModel from '../models/sampleDataModel'
import { SampleDataEntity } from '../entities/sampleDataEntity'
import { SampleDataMapper } from '../mapper/sampleDataMapper'





export class SampleDataRepository implements SampleDataInterface {

    private static instance: SampleDataRepository;

    private sampleDataMapper: SampleDataMapper;


    constructor() {
        this.sampleDataMapper = new SampleDataMapper();
    }
   
   
    static getInstance(): SampleDataRepository {

        if (!SampleDataRepository.instance) {
            SampleDataRepository.instance = new SampleDataRepository();
        }
        return SampleDataRepository.instance;
    }

    async save(sampleData: any): Promise<any> {

        console.info(` ::: Sample Data  details :::  `,sampleData);

        var sampleDataEntity = this.sampleDataMapper.mapFrom(sampleData);

        sampleDataEntity.created = moment().utc().toDate();

        console.log(` :::  organizationalObjectEntity :::`,sampleDataEntity);
        
        var result = await new sampleDataModel(sampleDataEntity).save();

        if (result) {

            console.info(` Data ingested `);

            return new Promise((resolve) => resolve(result));

        }

        console.error(` Data ingestion  failed`);

        return new Promise((reject) => reject(result));
        
    }



    async getLatestSampleData(query: any): Promise<any> { 

        console.info(` ::: Get latest Sample Data file :::`);

        var result = await sampleDataModel.find(query).sort({ "created": -1 }).limit(1);

        console.log(` :::Data Found :::`,result);

        if (result.length > 0) {
           return new Promise((resolve) =>resolve(result[0])); 

        } else { 
            return new Promise((resolve) => resolve({})); 

         }

     }
    

    async update(query: any, updateDoc: any): Promise<any> {
        throw new Error('Method not implemented.');


    }

    async delete(data: any): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async findAll(query: any): Promise<any> {
        
        console.info(` ::: Get latest Sample Data file :::`);

        var result = await sampleDataModel.find(query);

        console.log(` :::Data Found :::`,result);

        if (result.length > 0) {
           return new Promise((resolve) =>resolve(result[0])); 

        } else { 
            return new Promise((resolve) => resolve({})); 

        }
        
    }

    async find(query: any): Promise<any> {

        console.info(` ::: Find Sample data  :::  `,query);
       
       var result = await sampleDataModel.findOne(query);
        if (result) {
            console.info(` Data fetch `);

            return new Promise((resolve) => resolve(result));

        }
        console.error(` Data fetch  failed`);

        return new Promise((reject) => reject(result));
    }


    async findById(id: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async updateById(id: string, updateDoc: any): Promise<any> {
        throw new Error('Method not implemented.');
    }


    async deleteById(data: any): Promise<any> {
        throw new Error('Method not implemented.');
    } 
    



}