import { Session } from "@supabase/supabase-js";

declare global {
	interface UserType {
		email: string;
		password: string;
	}

	interface UserResponseType {
		user: {
			id: string;
			email: string;
			password: string;
			createdAt: Date;
		};
		session: Session;
	}
}

export {};
