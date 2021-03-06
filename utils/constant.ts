export default {
    mongoConfig: {
        dbName: 'console',
        host: {
            cluster: process.env.MONGO_DB_CLUSTER,
            dbUsername: process.env.MONGO_DB_U,
            dbPassword: process.env.MONGO_DB_P,          
        }
    },
    badRequestMessageKey: "BAD_REQUEST",
	generalMessageKey: "BAD_REQUEST",
	defaultLanguage: "en-US",
};
