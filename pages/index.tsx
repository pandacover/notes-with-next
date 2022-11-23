import React from "react";
import Head from "../components/meta";
import { useRouter } from "next/router";
import { authUser } from "../utils/supabase";
import { Spinner } from "../components";

export default function Home() {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		authUser()
			.then(() => router.replace("/dashboard"))
			.finally(() => setLoading(false));
	}, [router]);

	if (loading) return <Spinner className='loading-spinner' />;

	return (
		<>
			<Head title='Notes / home' />
			<div>
				<h1>Hello World</h1>
			</div>
		</>
	);
}
