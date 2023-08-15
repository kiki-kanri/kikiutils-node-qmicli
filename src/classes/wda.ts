import Device from './device';

export class Wda {
	device: Device;

	constructor(device: Device) {
        this.device = device;
    }

	async supportRawIP() {
		const result = await this.device.qmicli('--wda-get-data-format');
		return result.includes('raw-ip');
	}
}

export default Wda;
