import { Response } from 'express';

class HandleResponse {
	public static success(
		response: Response,
		data: Record<string, unknown>,
		status = 200
	): void {
		response.status(status).json(data);
	}
}

export default HandleResponse;
