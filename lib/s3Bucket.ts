import constant from "../utils/constant";
import AWS from 'aws-sdk';
const s3Bucket = new AWS.S3();
import moment from 'moment';
const { temporaryBucket, bucket, imageURL } = constant;

export const changePhotoBucket = (photoUrl: any) => {
    return new Promise((resolve, reject) => {
        if (!photoUrl || photoUrl.indexOf(temporaryBucket) === -1) {
            reject('invalid photo url')
        }
        const photoKey = photoUrl.substr(photoUrl.indexOf(temporaryBucket) + temporaryBucket.length + 1);
        const newKey = `order-review/${moment.utc().format('YYYY')}/${moment.utc().format('MM')}/${moment.utc().format('DD')}/${photoKey}`
        let params = {
            Bucket: bucket,
            CopySource: `/${temporaryBucket}/${photoKey}`,
            Key: newKey
        };
        s3Bucket.copyObject(params, (err: any, data: any) => {
            if (err) {
                console.log('error move photo', err);
                reject(err);
            }
            else {
                console.log('new photo url', `${imageURL}/${newKey}`)
                resolve(`${imageURL}/${newKey}`);
                s3Bucket.deleteObject({
                    Bucket: temporaryBucket,
                    Key: photoKey
                }, (err: any) => {
                    console.log('error', err)
                })
            }
        });
    })

}

export default {
    changePhotoBucket
}