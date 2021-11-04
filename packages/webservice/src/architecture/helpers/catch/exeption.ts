import type { Request, Response, NextFunction } from 'express';
import util from 'util';

import { IAsyncRoute, IRoute } from '#shared/interfaces';

function catchErrorWrapper(callback: IAsyncRoute | IRoute): IRoute {
	return function action(req: Request, res: Response, next: NextFunction) {
		if (util.types.isAsyncFunction(callback)) {
			Promise.resolve(callback(req, res, next)).catch(next);
		}
		callback(req, res, next);
	};
}

export { catchErrorWrapper };
