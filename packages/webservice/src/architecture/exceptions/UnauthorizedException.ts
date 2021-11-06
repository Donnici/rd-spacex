import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class UnauthorizedException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Unauthorized';
		super(msg, isJSON, HttpStatusCode.UNAUTHORIZED, code);
	}
}
