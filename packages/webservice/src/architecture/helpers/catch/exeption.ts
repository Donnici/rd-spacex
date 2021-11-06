import type { Request, Response, NextFunction } from 'express';

import { IAsyncRoute, IRoute } from '#shared/interfaces';

function catchErrorWrapper(callback: IAsyncRoute | IRoute): IRoute {
	return function action(req: Request, res: Response, next: NextFunction) {
		Promise.resolve(callback(req, res, next)).catch(next);
	};
}

export { catchErrorWrapper };
