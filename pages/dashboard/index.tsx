import React from "react";
import { authUser } from "../../utils/supabase";
import { useRouter } from "next/router";
import { Spinner, Head, Navbar } from "../../components";
import { UserResponse } from "@supabase/supabase-js";

const Dashboard = () => {
	const router = useRouter();
	const [loading, setLoading] = React.useState(false);
	const [user, setUser] = React.useState<UserResponse["data"]["user"]>(null);

	React.useEffect(() => {
		setLoading(true);
		authUser()
			.then((data) => setUser(data))
			.catch(() => router.replace("/"))
			.finally(() => setLoading(false));
	}, [router]);

	if (loading) return <Spinner className='loading-spinner' />;

	return (
		<>
			<Head title='Notes / dashboard' />
			<header className='absolute h-full w-64 left-0 top-0 flex flex-col pl-4 py-6 border-r-2 border-r-[#202020] font-light'>
				<Navbar user={user} setLoading={setLoading} />
			</header>
			<div className='w-[calc(100% - 16rem)] ml-64 pl-2'>
				<h1>Dashboard</h1>
				<h2>Hello user</h2>
			</div>
		</>
	);
};

export default Dashboard;
