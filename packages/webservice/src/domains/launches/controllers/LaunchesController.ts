import { Request, Response } from 'express';

import { ISpaceXLaunch } from '#providers/SpaceX';
import HandleResponse from '#shared/response';

import {
	NextLaunchService,
	LastLaunchService,
	PastLaunchesService,
	UpcomingLaunchesService
} from '../services';

class LaunchesController {
	public resource = 'launches';

	public async nextLaunch(
		_request: Request,
		response: Response
	): Promise<Response> {
		const nextLaunch = await new NextLaunchService().run();

		return HandleResponse.success<ISpaceXLaunch>(
			response,
			nextLaunch as ISpaceXLaunch
		);
	}

	public async lastLaunch(
		_request: Request,
		response: Response
	): Promise<Response> {
		const nextLaunch = await new LastLaunchService().run();

		return HandleResponse.success<ISpaceXLaunch>(
			response,
			nextLaunch as ISpaceXLaunch
		);
	}

	public async pastLaunches(
		request: Request,
		response: Response
	): Promise<Response> {
		const { page = '1', limit = '5' } = request.query;
		const pastLaunches = await new PastLaunchesService().run(
			Number(page),
			Number(limit)
		);

		return HandleResponse.success<Array<ISpaceXLaunch>>(
			response,
			pastLaunches as Array<ISpaceXLaunch>
		);
	}

	public async upcomingLaunches(
		request: Request,
		response: Response
	): Promise<Response> {
		const { page = '1', limit = '5' } = request.query;
		const upcomingLaunches = await new UpcomingLaunchesService().run(
			Number(page),
			Number(limit)
		);

		return HandleResponse.success<Array<ISpaceXLaunch>>(
			response,
			upcomingLaunches as Array<ISpaceXLaunch>
		);
	}
}

export default new LaunchesController();
