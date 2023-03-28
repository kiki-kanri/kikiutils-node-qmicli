import { execaCommand } from '@esm2cjs/execa';

export default class Exec {
	async qmicli(command: string) {
		return await this.exec(`sudo qmicli -p ${command}`);
	}

	async exec(command: string) {
		return (await execaCommand(command, { shell: true })).stdout.trim();
	}
}
