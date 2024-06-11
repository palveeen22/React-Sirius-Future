import { z } from "zod";

export const FormDataSchema = z.object({
	email: z.string().nonempty("Email is required."),
	password: z.string().nonempty("Password is required."),

	//   message: z
	//     .string()
	//     .nonempty('Message is required.')
	//     .min(6, { message: 'Message must be at least 6 characters.' })
});
