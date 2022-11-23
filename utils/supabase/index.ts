import { createClient } from "@supabase/supabase-js";

const supaKey = process.env.NEXT_PUBLIC_ANON_KEY || "";
const supaUrl = process.env.NEXT_PUBLIC_URL || "";

export const supabase = createClient(supaUrl, supaKey);

// @desc Register new user
// @access Public

export const createUser = async ({
	email,
	password,
}: {
	[key: string]: string;
}) => {
	const {
		data: { user },
		error,
	} = await supabase.auth.signUp({ email, password });
	if (error) {
		return Promise.reject(new Error(error.message));
	}
	return Promise.resolve(user);
};

// @desc Login existing user
// @access Public

export const loginUser = async ({
	email,
	password,
}: {
	[key: string]: string;
}) => {
	const {
		data: { user },
		error,
	} = await supabase.auth.signInWithPassword({ email, password });
	if (error) {
		return Promise.reject(new Error(error.message));
	}
	return Promise.resolve(user);
};

// @desc Get user
// @access None

export const authUser = async () => {
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error) {
		return Promise.reject("Cannot authorize the user");
	}

	return Promise.resolve(user);
};
