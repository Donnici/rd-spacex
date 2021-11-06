import { HttpStatusCode } from '#shared/interfaces';

import { CoreException } from './CoreException';

export class ValidationException extends CoreException {
	constructor(message?: string, isJSON = false, code?: string) {
		const msg = message || 'Validation Error';
		super(msg, isJSON, HttpStatusCode.NOT_ACCEPTABLE, code);
	}
}
