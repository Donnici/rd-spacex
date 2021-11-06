import pkg from '#root/package.json';
import { IService } from '#shared/interfaces';


class InfoService implements IService {
	public run() {
		return {
			name: pkg.name,
			version: pkg.version,
			author: pkg.author
		};
	}
}

export default InfoService;
