import Express from 'express';

import { catchErrorWrapper } from '#architecture/helpers/catch/exeption';
import { walkRoutes } from '#architecture/helpers/walkers/routes';
import { IObjectRoute } from '#shared/interfaces/application/route';
import Logger from '#shared/logger';

class Routes {
	private pathRoutes: Array<string>;

	private router: Express.Router;

	constructor() {
		this.pathRoutes = walkRoutes();
		this.router = Express.Router();
	}

	public async getRouters() {
		await this.registerRoutes();
		this.router.get('/', (req, res) => res.redirect('/api'));
		return this.router;
	}

	private async getObjectRoutes(): Promise<Array<IObjectRoute>> {
		const allRoutes: Array<IObjectRoute> = [];
		for (const pathRouter of this.pathRoutes) {
			const routes: Array<IObjectRoute> = (await import(pathRouter))
				.default;
			allRoutes.push(...routes);
		}
		return allRoutes;
	}

	private formatUrl(prefix: string, resource: string, actionUrl: string) {
		const newResource = resource === '' ? '' : `/${resource}`;
		const newActionUrl = resource === '/' ? '' : `/${actionUrl}`;
		let newUrl = `${prefix}${newResource}${newActionUrl}`.replace(
			/\/\//g,
			'/'
		);
		if (newUrl.endsWith('/')) {
			newUrl = newUrl.slice(0, -1);
		}
		return newUrl;
	}

	private registerPublicRoute(prefix: string, route: IObjectRoute) {
		const url = this.formatUrl(prefix, route.resource, route.url);
		Logger.info(url);
		const wrappedRoute = catchErrorWrapper(route.controllerRoute);
		this.router[route.method](url, wrappedRoute);
	}

	private registerPrivateRoute(prefix: string, route: IObjectRoute) {
		const url = this.formatUrl(prefix, route.resource, route.url);
		Logger.info(url);
		const wrappedRoute = catchErrorWrapper(route.controllerRoute);
		this.router[route.method](url, wrappedRoute);
	}

	private async registerRoutes() {
		const allRoutes = await this.getObjectRoutes();

		for (const router of allRoutes) {
			const vs =
				router.version && router.version !== ''
					? `/${router.version}`
					: '';
			if (router.protected) {
				this.registerPrivateRoute(`/api${vs}`, router);
			} else {
				this.registerPublicRoute(`/api${vs}`, router);
			}
		}
	}
}

export default Routes;
