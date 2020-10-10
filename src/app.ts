import { loadControllers } from 'awilix-express';
import Server from './server';
import container from './container';

const app = new Server().getApp();

container(app);
app.use(loadControllers('api/modules/**/*.controller.ts', { cwd: __dirname }));

export default { app };
