import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class InternalServerErrorException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Internal Server Error';
		super(msg, isJSON, HttpStatusCode.INTERNAL_SERVER_ERROR, code);
	}
}
