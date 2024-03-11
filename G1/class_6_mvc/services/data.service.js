import fs from 'fs/promises';

// Normal method
// const service = new DataService()
// service.readData()

// Static
// DataService.readData()

export default class DataService {
	static async readData(path) {
		const arr = await fs.readFile(path);

		return JSON.parse(arr);
	}

	static async writeData(path, data) {
		return fs.writeFile(path, JSON.stringify(data, null, 2));
	}
}
