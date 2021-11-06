import { HttpStatusCode } from '#shared/interfaces';
import Logger from '#shared/logger';

export abstract class CoreException extends Error {
	public readonly name: string;

	public readonly message: string;

	public readonly status: HttpStatusCode;

	public readonly code?: string;

	public readonly isJSON?: boolean;

	constructor(
		message: string,
		isJSON = false,
		status = HttpStatusCode.INTERNAL_SERVER_ERROR,
		code?: string
	) {
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.isJSON = isJSON;
		this.status = status;
		this.code = code;
		this.stack = new Error(message).stack;
	}
}
