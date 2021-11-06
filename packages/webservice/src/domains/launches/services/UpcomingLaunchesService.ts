import { BadRequestException } from '#exceptions';
import { SpaceXProvider } from '#providers/SpaceX';
import { IService } from '#shared/interfaces';

class UpcomingLaunchesService implements IService {
	private spaceXProvider: SpaceXProvider;

	constructor() {
		this.spaceXProvider = new SpaceXProvider();
	}

	public async run(page?: number, limit?: number) {
		const [upcomingLaunches, error] = await this.spaceXProvider.upcomingLaunches(
			page,
			limit
		);
		if (error) {
			throw new BadRequestException(
				JSON.stringify(error.response?.data || {}),
				true
			);
		}

		return upcomingLaunches;
	}
}

export default UpcomingLaunchesService;
