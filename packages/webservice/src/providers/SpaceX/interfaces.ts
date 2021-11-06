import type { AxiosError } from 'axios';

export interface Reddit {
	campaign: string;
	launch: string;
	media: string;
	recovery: null;
}

export interface Patch {
	small: string;
	large: string;
}

export interface Flickr {
	small: any[];
	original: string[];
}

export interface Links {
	patch: Patch;
	reddit: Reddit;
	flickr: Flickr;
	presskit: string;
	webcast: string;
	youtube_id: string;
	article: string;
	wikipedia: string;
}

export interface Core {
	core: string;
	flight: number;
	gridfins: boolean;
	legs: boolean;
	reused: boolean;
	landing_attempt: boolean;
	landing_success: boolean;
	landing_type: string;
	landpad: string;
}

export interface ISpaceXLaunch {
	fairings: null;
	links: Links;
	static_fire_date_utc: string;
	static_fire_date_unix: number;
	tdb: boolean;
	net: boolean;
	window: number;
	rocket: string;
	success: boolean;
	failures: any[];
	details: string;
	crew: any[];
	ships: any[];
	capsules: string[];
	payloads: string[];
	launchpad: string;
	auto_update: boolean;
	flight_number: number;
	name: string;
	date_utc: string;
	date_unix: number;
	date_local: string;
	date_precision: string;
	upcoming: boolean;
	cores: Core[];
	id: string;
}

export interface ISpaceXLaunchQuery {
	docs: Array<ISpaceXLaunch>;
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: number | null;
	nextPage: number | null;
}

export interface ISpaceXProvider {
	nextLaunch: () => Promise<[ISpaceXLaunch | null, AxiosError | null]>;
	upcomingLaunches: (
		page: number,
		limit: number
	) => Promise<[Array<ISpaceXLaunch> | null, AxiosError | null]>;
	lastLaunch: () => Promise<[ISpaceXLaunch | null, AxiosError | null]>;
	pastLaunches: (
		page: number,
		limit: number
	) => Promise<[Array<ISpaceXLaunch> | null, AxiosError | null]>;
}
