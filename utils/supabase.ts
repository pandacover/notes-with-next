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
		data: { user, session },
		error,
	} = await supabase.auth.signUp({ email, password });

	if (error) throw error;
	return { user, session };
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
		data: { user, session },
		error,
	} = await supabase.auth.signInWithPassword({ email, password });

	if (error) throw error;
	return { user, session };
};

// @desc Logout user
// @access Public

export const logoutUser = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) throw error;
	return "Logged out user!";
};
