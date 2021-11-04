import InfoController from './InfoController';

export default [
	{
		url: `/`,
		version: '',
		method: 'get',
		resource: InfoController.resource,
		action: 'info',
		controllerRoute: InfoController.info,
		protected: false
	}
];
