import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class TooManyRequestsException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Too Many Requests';
		super(msg, isJSON, HttpStatusCode.TOO_MANY_REQUESTS, code);
	}
}
