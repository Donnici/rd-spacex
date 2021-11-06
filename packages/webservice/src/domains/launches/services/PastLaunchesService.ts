import { BadRequestException } from '#exceptions';
import { SpaceXProvider } from '#providers/SpaceX';
import { IService } from '#shared/interfaces';

class PastLaunchesService implements IService {
	private spaceXProvider: SpaceXProvider;

	constructor() {
		this.spaceXProvider = new SpaceXProvider();
	}

	public async run(page?: number, limit?: number) {
		const [pastLaunches, error] = await this.spaceXProvider.pastLaunches(
			page,
			limit
		);
		if (error) {
			throw new BadRequestException(
				JSON.stringify(error.response?.data || {}),
				true
			);
		}

		return pastLaunches;
	}
}

export default PastLaunchesService;
