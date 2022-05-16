


import mongoose from 'mongoose'



const SampleDataSchema = new mongoose.Schema({
    objectName: String,
    aggregateType: String,
    provider:      String,
    organization:  String,
    sampleData:    Object,
    created:       Date,
    createdBy:     String   
});

const SampleDataModel = mongoose.model('sample_file_data', SampleDataSchema);

export default SampleDataModel