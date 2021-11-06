import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class NotFoundException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Not Found';
		super(msg, isJSON, HttpStatusCode.NOT_FOUND, code);
	}
}
