import { readdir } from 'fs-extra';

import Device from './classes/device';

export const listDevices = async () => {
	const devices = await readdir('/dev') as string[];
	const filteredDevices = devices.filter((deviceName) => deviceName.includes('cdc-'));
	return filteredDevices.map((deviceName) => new Device(deviceName));
}
