import { Request, Response } from 'express';

import pkg from '#root/package.json';
import HandleResponse from '#shared/response';

class InfoController {
	public resource = '';

	public info(_request: Request, response: Response): void {
		HandleResponse.success(response, {
			name: pkg.name,
			version: pkg.version,
			author: pkg.author
		});
	}
}

export default new InfoController();
