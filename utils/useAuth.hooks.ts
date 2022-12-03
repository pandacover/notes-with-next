import { useState, useEffect } from "react";
import { supabase } from "./supabase";
import { AuthError, Session } from "@supabase/supabase-js";

const useAuth = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState<Session | null>(null);
	const [error, setError] = useState<AuthError | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session }, error: err }) => {
			setUser(session);
			setError(err);
		});

		setLoading(false);

		supabase.auth.onAuthStateChange((event, session) => {
			if (session) {
				setUser(session);
			}
			setLoading(false);
		});
	}, []);

	return { user, loading, error };
};

export default useAuth;
