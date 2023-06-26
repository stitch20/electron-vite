import { exec } from "child_process";

export const getTaskList = async (): Promise<string[]> => {
	return new Promise((res, rej) => {
		exec(`tasklist`, (err, stdout) => {
			if (err) {
				rej(err);
			} else {
				const processList = stdout
					.split(/\r\n/g)
					.splice(3)
					.map((v) => v.replace(/ +/g, " ").split(/ /g)[0].trim());
				res(processList);
			}
		});
	});
};
