import * as z from "zod";

export const windowLocalStorageSchema = z.object({
	length: z.number().nonnegative(),

	get: z.function({
		input: z.tuple([z.string().max(20)]),
		output: z.union([z.string(), z.null()]),
	}),

	set: z.function({
		input: z.tuple([z.string().max(20), z.string()]),
		output: z.void(),
	}),

	remove: z.function({
		input: z.tuple([z.string().max(20)]),
		output: z.void(),
	}),

	clear: z.function({
		output: z.void(),
	}),

	key: z.function({
		input: z.tuple([z.number().nonnegative()]),
		output: z.union([z.string(), z.null()]),
	}),
});
