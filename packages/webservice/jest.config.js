const moduleNameMapper = require('jest-module-name-mapper').default;

module.exports = {
	testEnvironment: 'node',
	roots: ['<rootDir>/'],
	cache: false,
	clearMocks: true,
	forceExit: true,
	resetMocks: true,
	resetModules: true,
	restoreMocks: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: moduleNameMapper()
};
