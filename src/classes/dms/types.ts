import { NullableString } from '@/types';

export interface Capabilities {
	dataService: string;
	maxRxChannelRate: number;
	maxTxChannelRate: number;
	networks: string;
	sim: 'supported' | 'unsupported';
}

export interface Ids {
	esn: number;
	imei: string;
	imeiSv: number;
	meid: string | 'unknown';
}

export interface Manufacturer {
	manufacturer: string;
}

export interface Model {
	model: NullableString;
}

export interface Revision {
	revision: string;
}
