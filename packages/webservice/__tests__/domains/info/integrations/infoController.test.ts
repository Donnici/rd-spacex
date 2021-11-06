import request from 'supertest';

import pkg from '../../../../package.json';
import { Server } from '../../../../src/architecture';

const server = new Server();
server.configure();
const app = server.getApp();

describe('GET /api - get info about api', () => {
	it('Should return 200', async () => {
		const result = await request(app).get('/api');
		expect(result.status).toEqual(200);
	});
	it('Check body response', async () => {
		const result = await request(app).get('/api');
		expect(result.status).toEqual(200);
		expect(result.body).toMatchObject({
			name: pkg.name,
			version: pkg.version,
			author: pkg.author
		});
	});
});
