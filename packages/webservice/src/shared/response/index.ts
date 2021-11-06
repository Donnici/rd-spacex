import { Response } from 'express';

class HandleResponse {
	public static success<T>(
		response: Response,
		data: T,
		status = 200
	): Response {
		return response.status(status).json(data);
	}
}

export default HandleResponse;
