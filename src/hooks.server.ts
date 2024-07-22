interface Event {
	response?: {
		status?: number;
	};
}

export function handleError({ event, error }: { event: Event; error: unknown }) {
	console.error(event);
	console.error(error);

	const code = error.status;

	// Specific to 404
	if (code === 404) {
		return {
			message: "We looked at all the buildings and didn't find this page",
			code: 404
		};
	} else if (code === 500) {
		return {
			message: 'Internal Server Error occurred',
			code: 500
		};
	} else
		return {
			message: 'An error occurred',
			code: code || 500
		};
}
