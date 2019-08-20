import app from './app';
import mongoose from './mongoose';

const PORT = 3000;

mongoose.connection.on('open', () => {
  console.info('MongoDB: Connection Successful');
  app.listen(PORT, () => console.log('Server listening in ' + PORT));
});
