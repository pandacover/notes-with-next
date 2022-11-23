import React from "react";
import { authUser } from "../../utils/supabase";
import { useRouter } from "next/router";
import { Spinner } from "../../components";

const Dashboard = () => {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		setLoading(true);
		authUser()
			.catch(() => router.replace("/"))
			.finally(() => setLoading(false));
	}, [router]);

	if (loading) return <Spinner className='loading-spinner' />;

	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
};

export default Dashboard;
