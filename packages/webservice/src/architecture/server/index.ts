import Express from 'express';
import { Server as HTTPServer } from 'http';
import Pino from 'pino-http';

import Routes from '#architecture/routes';
import Logger from '#shared/logger';
import { getMessage } from '#shared/messages';

class Server {
	private port: number;

	private app: Express.Application;

	private server!: HTTPServer;

	private router!: Routes;

	constructor(port: number) {
		this.port = port;
		this.app = Express();
		this.router = new Routes();
	}

	private start = (): void => {
		Logger.debug(`🌐 ${getMessage('running')} 🚀`);
	};

	private configure = async (): Promise<void> => {
		const routes = await this.router.getRouters();
		this.app.use(routes);
	};

	public async run() {
		this.app.use(Pino());
		await this.configure();
		this.server = this.app.listen(this.port, this.start);
	}
}

export default Server;
