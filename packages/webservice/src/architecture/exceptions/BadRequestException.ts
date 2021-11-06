import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class BadRequestException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Bad Request';
		super(msg, isJSON, HttpStatusCode.BAD_REQUEST, code);
	}
}
