import { Server } from './architecture';
import { PORT } from './shared/environment';

const server = new Server(PORT);
server.run();
