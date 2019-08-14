import app from './app';
import { sequelize } from './connection';

const PORT = 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Server listening in ' + PORT));
});
