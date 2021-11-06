import { BadRequestException } from '#exceptions';
import { SpaceXProvider } from '#providers/SpaceX';
import { IService } from '#shared/interfaces';

class LastLaunchService implements IService {
	private spaceXProvider: SpaceXProvider;

	constructor() {
		this.spaceXProvider = new SpaceXProvider();
	}

	public async run() {
		const [lastLaunch, error] = await this.spaceXProvider.lastLaunch();
		if (error) {
			throw new BadRequestException(
				JSON.stringify(error.response?.data || {}),
				true
			);
		}

		return lastLaunch;
	}
}

export default LastLaunchService;
