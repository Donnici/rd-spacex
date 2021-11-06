import axios, { AxiosError, AxiosInstance } from 'axios';

import { SPACEX_BASE_API_URI } from '#shared/environment';

import { ISpaceXLaunch, ISpaceXProvider } from '../interfaces';

class SpaceXRestAPIProvider implements ISpaceXProvider {
	private request: AxiosInstance = axios.create({
		baseURL: SPACEX_BASE_API_URI,
		timeout: 3000
	});

	public async nextLaunch(): Promise<
		[ISpaceXLaunch | null, AxiosError | null]
		> {
		try {
			const response = await this.request.get<ISpaceXLaunch>(
				'/v5/launches/next'
			);
			return [response.data, null];
		} catch (error) {
			return [null, error as AxiosError];
		}
	}

	public async upcomingLaunches(
		page = 1,
		limit = 5
	): Promise<[Array<ISpaceXLaunch> | null, AxiosError | null]> {
		try {
			const response = await this.request.post<Array<ISpaceXLaunch>>(
				'/v5/launches/query',
				{
					query: {
						upcoming: true
					},
					options: {
						page,
						limit
					}
				}
			);
			return [response.data, null];
		} catch (error) {
			return [null, error as AxiosError];
		}
	}

	public async lastLaunch(): Promise<
		[ISpaceXLaunch | null, AxiosError | null]
		> {
		try {
			const response = await this.request.get<ISpaceXLaunch>(
				'/v5/launches/latest'
			);
			return [response.data, null];
		} catch (error) {
			return [null, error as AxiosError];
		}
	}

	public async pastLaunches(
		page = 1,
		limit = 5
	): Promise<[Array<ISpaceXLaunch> | null, AxiosError | null]> {
		try {
			const response = await this.request.post<Array<ISpaceXLaunch>>(
				'/v5/launches/query',
				{
					query: {
						upcoming: false
					},
					options: {
						page,
						limit
					}
				}
			);
			return [response.data, null];
		} catch (error) {
			return [null, error as AxiosError];
		}
	}
}

export default SpaceXRestAPIProvider;
