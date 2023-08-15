import { parseResult } from '@/library/utils';
import Device from '../device';
import {
	CellLocationInfo,
	HomeNetwork,
	ServingSystem,
	SystemInfo,
	SystemSelectionPreference,
	TechnologyPreference
} from './types';

export class Nas {
	device: Device;

	constructor(device: Device) {
		this.device = device;
	}

	/**
	 * Get Cell Location Info.
	 */
	async getCellLocationInfo() {
		const result = await this.device.qmicli('--nas-get-cell-location-info');
		return parseResult(result) as CellLocationInfo;
	}

	/**
	 * Get home network.
	 */
	async getHomeNetwork() {
		const result = await this.device.qmicli('--nas-get-home-network');
		return parseResult(result) as HomeNetwork;
	}

	/**
	 * Get serving system
	 */
	async getServingSystem() {
		const result = await this.device.qmicli('--nas-get-serving-system');
		return parseResult(result) as ServingSystem;
	}

	/**
	 * Get system info
	 */
	async getSystemInfo() {
		const result = await this.device.qmicli('--nas-get-system-info');
		return parseResult(result) as SystemInfo;
	}

	/**
	 * Get system selection preference.
	 */
	async getSystemSelectionPreference() {
		const result = await this.device.qmicli('--nas-get-system-selection-preference');
		return parseResult(result) as SystemSelectionPreference;
	}

	/**
	 * Get technology preference.
	 */
	async getTechnologyPreference() {
		const result = await this.device.qmicli('--nas-get-technology-preference');
		return parseResult(result) as TechnologyPreference;
	}
}

export default Nas;
