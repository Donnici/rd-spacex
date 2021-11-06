import LaunchesController from './controllers/LaunchesController';

export default [
	{
		url: `/next`,
		version: 'v1',
		method: 'get',
		resource: LaunchesController.resource,
		action: 'next',
		controllerRoute: LaunchesController.nextLaunch,
		protected: false
	},
	{
		url: `/last`,
		version: 'v1',
		method: 'get',
		resource: LaunchesController.resource,
		action: 'last',
		controllerRoute: LaunchesController.lastLaunch,
		protected: false
	},
	{
		url: `/past`,
		version: 'v1',
		method: 'get',
		resource: LaunchesController.resource,
		action: 'past',
		controllerRoute: LaunchesController.pastLaunches,
		protected: false
	},
	{
		url: `/upcoming`,
		version: 'v1',
		method: 'get',
		resource: LaunchesController.resource,
		action: 'upcoming',
		controllerRoute: LaunchesController.upcomingLaunches,
		protected: false
	}
];
