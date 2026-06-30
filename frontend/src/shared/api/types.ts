import type { ErrorCode } from "../messages/errors";

export interface ApiError {
	timestamp: string;
	status: number;
	code: ErrorCode
	error: string;
	message: string;
	errors: Record<string, string> | null;
	path: string;
}
