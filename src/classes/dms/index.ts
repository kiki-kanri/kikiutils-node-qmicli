import { parseResult } from '@/library/utils';
import Device from '../device';
import { Capabilities, Ids, Manufacturer, Model, Revision } from './types';

export class Dms {
	device: Device;

	constructor(device: Device) {
		this.device = device;
	}

	/**
	 * Get capabilities.
	 */
	async getCapabilities() {
		const result = await this.device.qmicli('--dms-get-capabilities');
		return parseResult(result) as Capabilities;
	}

	/**
	 * Get IDs.
	 */
	async getIds() {
		const result = await this.device.qmicli('--dms-get-ids');
		return parseResult(result) as Ids;
	}

	/**
	 * Get manufacturer.
	 */
	async getManufacturer() {
		const result = await this.device.qmicli('--dms-get-manufacturer');
		return parseResult(result) as Manufacturer;
	}

	/**
	 * Get model.
	 */
	async getModel() {
		const result = await this.device.qmicli('--dms-get-model');
		return parseResult(result, {
			parseFunc: (value) => value || null
		}) as Model;
	}

	/**
	 * Get revision.
	 */
	async getRevision() {
		const result = await this.device.qmicli('--dms-get-revision');
		return parseResult(result) as Revision;
	}

	/**
	 * Set the device operating mode.
	 */
	async setOperatingMode(mode: 'offline' | 'reset') {
		return await this.device.qmicli(`--dms-set-operating-mode="${mode}"`);
	}
}

export default Dms;
