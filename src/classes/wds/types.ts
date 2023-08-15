export interface StartNetworkOptions {
	apn?: string;
	auth?: 'BOTH' | 'CHAP' | 'PAP';
	autoconnect?: boolean | 'no' | 'yes';
	ipType?: 4 | 6;
	password?: string;
	username?: string;
}

export interface StopNetworkOptions {
	dataHandle?: number;
	disableAutoconnect?: boolean;
}
