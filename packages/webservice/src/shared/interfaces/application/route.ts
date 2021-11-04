import type { NextFunction, Request, Response } from 'express';

export interface IRoute {
	(request: Request, response: Response, next: NextFunction): Response | void;
}

export interface IAsyncRoute {
	(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<Response | void>;
}

export interface IObjectRoute {
	url: string;
	version: string;
	method: 'get' | 'post' | 'put' | 'patch' | 'delete';
	resource: string;
	action: string;
	controllerRoute: IRoute | IAsyncRoute;
	protected: boolean;
}
