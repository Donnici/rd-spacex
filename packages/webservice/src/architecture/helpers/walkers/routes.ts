import fs from 'fs';
import path from 'path';

export const walkRoutes = (
	dir = path.resolve(path.join(__dirname, '..', '..', '..', 'domains'))
): string[] => {
	const routes: string[] = [];
	fs.readdirSync(dir).forEach((f) => {
		const dirPath = path.join(dir, f);
		if (f.includes('.routes.')) {
			routes.push(dirPath);
		}
		if (fs.statSync(dirPath).isDirectory()) {
			const otherRoutes = walkRoutes(dirPath);
			routes.push(...otherRoutes);
		}
	});

	return routes;
};
