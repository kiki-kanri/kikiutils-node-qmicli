import { processParams } from '@/library/utils';
import { Nullable } from '@/types';
import Device from '../device';
import { StartNetworkOptions } from './types';

export class Wds {
	device: Device;
	packetDataHandle?: number;

	constructor(device: Device) {
		this.device = device;
	}

	/**
	 * Get autoconnect settings.
	 */
	async getAutoConnectSetting(): Promise<Nullable<'disabled' | 'enabled' | 'paused'>> {
		const result = await this.device.qmicli('--wds-get-autoconnect-settings');
		const resultMatch = result.match(/'(.*)'/);
		if (!resultMatch) return null;
		return resultMatch[1] as 'disabled' | 'enabled' | 'paused';
	}

	/**
	 * Get packet service status.
	 */
	async getPacketServiceStatus(): Promise<Nullable<'connected' | 'disconnected'>> {
		const result = await this.device.qmicli('--wds-get-packet-service-status');
		const resultMatch = result.match(/'(.*)'/);
		if (!resultMatch) return null;
		return resultMatch[1] as 'connected' | 'disconnected';
	}

	/**
	 * Set autoconnect settings.
	 */
	async setAutoConnectSetting(mode: 'disabled' | 'enabled' | 'paused') {
		const nowMode = await this.getAutoConnectSetting();
		if (nowMode === mode) return;
		const result = await this.device.qmicli(`--wds-set-autoconnect-settings=${mode}`);
		return result.includes('updated');
	}

	/**
	 * Start network (allowed keys: apn, 3gpp-profile, 3gpp2-profile, auth (PAP|CHAP|BOTH), username, password, autoconnect=yes, ip-type (4|6)).
	 */
	async startNetwork(options: StartNetworkOptions) {
		if (this.packetDataHandle) return this.packetDataHandle;
		if (await this.getAutoConnectSetting() === 'enabled') return false;
		if (await this.getPacketServiceStatus() === 'connected') return true;
		if (options.autoconnect === true) options.autoconnect = 'yes';
		if (!options.autoconnect) options.autoconnect = 'no';
		const params = processParams(options);
		const result = await this.device.qmicli(`--wds-start-network="${params}"`);
		const handleMatch = result.replaceAll('\n', '').match(/'([0-9]*)/);
		if (!handleMatch) return null;
		return this.packetDataHandle = parseInt(handleMatch[1]);
	}
}

export default Wds;
