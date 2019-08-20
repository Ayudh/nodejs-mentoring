import mongoose from 'mongoose';

const URL = 'mongodb://localhost:27017/test';

mongoose.connect(URL);

mongoose.connection.on('error', err => console.info(`error: ${err.message}`));

export default mongoose;
