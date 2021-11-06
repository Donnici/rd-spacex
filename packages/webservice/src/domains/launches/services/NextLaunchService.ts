import { BadRequestException } from '#exceptions';
import { SpaceXProvider } from '#providers/SpaceX';
import { IService } from '#shared/interfaces';

class NextLaunchService implements IService {
	private spaceXProvider: SpaceXProvider;

	constructor() {
		this.spaceXProvider = new SpaceXProvider();
	}

	public async run() {
		const [nextLaunch, error] = await this.spaceXProvider.nextLaunch();
		if (error) {
			throw new BadRequestException(
				JSON.stringify(error.response?.data || {}),
				true
			);
		}

		return nextLaunch;
	}
}

export default NextLaunchService;
