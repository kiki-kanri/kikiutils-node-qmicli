import { Dms, Exec, Nas, Wda, Wds } from '.';

export default class Device extends Exec {
	dms: Dms;
	interfaceName?: string;
	name: string;
	nas: Nas;
	path: string;
	wda: Wda;
	wds: Wds;

	constructor(deviceName: string) {
		super();
		this.name = deviceName;
		this.path = `/dev/${deviceName}`;

		this.dms = new Dms(this);
		this.nas = new Nas(this);
		this.wda = new Wda(this);
		this.wds = new Wds(this);
	}

	async getInterfaceName() {
		if (!this.interfaceName) this.interfaceName = await this.qmicli('-w');
		return this.interfaceName;
	}

	async qmicli(command: string) {
		return await this.exec(`sudo qmicli -p -d ${this.path} ${command}`);
	}
}
