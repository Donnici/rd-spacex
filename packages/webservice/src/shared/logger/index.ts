import Pino from 'pino';

class Logger {
	private static instance: Logger;

	private readonly logger: Pino.Logger;

	private constructor(logger: Pino.Logger) {
		this.logger = logger;
	}

	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger(
				Pino({
					name: '@rd-spacex/webservice',
					transport: {
						target: 'pino-pretty',
						options: {
						  colorize: true,
						  ignore: 'pid,hostname'
						}
					  }
				})
			);
		}
		return Logger.instance;
	}

	public error(message: string, ...args: any[]): void {
		this.logger.error(message, ...args);
	}

	public warn(message: string, ...args: any[]): void {
		this.logger.warn(message, ...args);
	}

	public info(message: string, ...args: any[]): void {
		this.logger.info(message, ...args);
	}

	public debug(message: string, ...args: any[]): void {
		this.logger.debug(message, ...args);
	}

	public trace(message: string, ...args: any[]): void {
		this.logger.trace(message, ...args);
	}
}
export default Logger.getInstance();
