import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class ForbiddenException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Forbidden';
		super(msg, isJSON, HttpStatusCode.FORBIDDEN, code);
	}
}
