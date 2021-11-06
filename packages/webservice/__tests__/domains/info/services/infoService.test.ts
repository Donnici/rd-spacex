import pkg from '../../../../package.json';
import { InfoService } from '../../../../src/domains/info/services';


describe('Information :: Services :: InfoService', () => {
	it('Should return application information', async () => {
		const infoService = new InfoService().run()
		expect(infoService).toBeDefined();
		expect(infoService).toMatchObject({
			name: pkg.name,
			version: pkg.version,
			author: pkg.author
		})
	});
});
