import fs from 'fs/promises';

// Normal method
// const service = new DataService()
// service.readData()

// Static
// DataService.readData()


// This is a general helper service used to communicate to the "database" (files)

export default class DataService {
	static async readData(path) {
		// get data from file on certain path
		const arr = await fs.readFile(path);

		// return the fetched JSON => parsed
		return JSON.parse(arr);
	}

	static async writeData(path, data) {
		// write data to the file => stringified
		return fs.writeFile(path, JSON.stringify(data, null, 2));
	}
}
