import { Request, Response } from 'express';

import HandleResponse from '#shared/response';

import { InfoService } from '../services';

class InfoController {
	public resource = '';

	public info(_request: Request, response: Response): void {
		const info = new InfoService().run();
		HandleResponse.success(response, info);
	}
}

export default new InfoController();
