export interface CellLocationInfo {
	cellReselectionHighThreshold?: number;
	cellReselectionLowThreshold?: number;
	cellReselectionPriority: number;
	cellSelectionRxLevel: number;
	cellSelectionRxLevelHighThreshold: number;
	cpichEcNo?: string;
	cpichRscp?: string;
	eutraAbsoluteRfChannelNumber: string;
	globalCellId: number;
	lteTimingAdvance?: 'available' | 'unavailable';
	physicalCellId: number;
	plmn: number;
	primaryScramblingCode?: number;
	rsrp: string;
	rsrq: string;
	rssi: string;
	sIntraSearchThreshold: number;
	sNonIntraSearchThreshold: number;
	selectionRxLevelLowThreshold: number;
	servingCellId: number;
	servingCellLowThreshold: number;
	trackingAreaCode: number;
	ueInIdle: boolean;
	utraAbsoluteRfChannelNumber: number;
}

export interface HomeNetwork {
	description: string;
	mcc: number;
	mnc: number;
	networkNameSource?: string;
}

export interface ServingSystem {
	'3GppCellId': number;
	'3GppDaylightSavingTimeAdjustment': string;
	'3GppLocationAreaCode': number;
	'3GppTimeZoneOffset': string;
	capability: 'cs-ps';
	cs: 'attached' | 'detached';
	dataServiceCapabilities: number;
	description: string;
	forbidden: boolean;
	hdrHybrid: boolean;
	hdrStatus: 'none';
	lteTrackingAreaCode: number;
	mcc: number;
	mnc: number;
	mncWithPcsDigit: boolean;
	ps: 'attached' | 'detached';
	radioInterfaces: number;
	registrationState: 'registered';
	roamingIndicators: number;
	roamingStatus: boolean;
	selectedNetwork: '3gpp';
	status: 'available' | 'unavailable';
}

export interface SystemInfo {
	cellAccess?: string;
	cellId: number;
	domain: string;
	eMbmsCoverageInfoSupport: boolean;
	eMbmsCoverageInfoTraceId: number;
	forbidden: boolean;
	imsVoiceSupport: boolean;
	mcc: number;
	mnc: number;
	preferredDataPath: boolean;
	registrationDomain: string;
	registrationRestriction: string;
	roamingStatus: boolean;
	serviceCapability: string;
	simRejectInfo: 'available' | 'unavailable';
	status: 'available' | 'none' | 'unavailable';
	trackingAreaCode: number;
	trueStatus: 'available' | 'none' | 'unavailable';
	voiceSupport: boolean;
}

export interface SystemSelectionPreference {
	'lteBandPreference (extended)'?: string;
	'gsm/wcdmaAcquisitionOrderPreference': string;
	acquisitionOrderPreference: string;
	bandPreference: string;
	emergencyMode: boolean;
	lteBandPreference: string;
	modePreference: string;
	networkSelectionPreference: string;
	roamingPreference: string;
	registrationRestriction: string;
	serviceDomainPreference: string;
	tdScdmaBandPreference: string;
	usagePreference: string;
	voiceDomainPreference?: string;
}

export interface TechnologyPreference {
	active: string;
}
