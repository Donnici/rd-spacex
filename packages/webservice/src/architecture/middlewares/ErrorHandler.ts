import { NextFunction, Request, Response } from 'express';

import { HttpStatusCode } from '#root/src/shared/interfaces';

import { CoreException } from '../exceptions/CoreException';

class ErrorHandler {
	public static errorHandler(
		err: Error,
		_request: Request,
		response: Response,
		_next: NextFunction
	) {
		const debug = process.env.NODE_ENV === 'development';
		if (err instanceof CoreException) {
			const body = {
				...(err.isJSON
					? JSON.parse(err.message)
					: { message: err.message })
			};

			if (debug) {
				body.code = err.code;
				body.status = err.status;
				body.stack = err.stack;
			}
			return response.status(err.status).json(body);
		}

		return debug
			? response.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
				name: err.name,
				stack: err.stack
			  })
			: response.sendStatus(500);
	}

	public static notFoundHandler(
		_request: Request,
		response: Response,
		_next: NextFunction
	): Response {
		return response.json({
			error: true,
			message: 'Not found'
		}).status(HttpStatusCode.NOT_FOUND);
	}
}

export default ErrorHandler;
