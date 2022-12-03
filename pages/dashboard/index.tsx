import React from "react";
import useAuth from "../../utils/useAuth.hooks";
import { useRouter } from "next/router";
import { Spinner, Head, Navbar } from "../../components";
import { UserResponse } from "@supabase/supabase-js";

const Dashboard = () => {
	const router = useRouter();
	const { user, error, loading } = useAuth();

	React.useEffect(() => {
		if (!user && !loading) router.push("/auth/signup");
		if (error) console.error(error);
	}, [user, error, loading, router]);

	if (loading) return <Spinner className='loading-spinner' />;

	return (
		<>
			<Head title='Notes / dashboard' />
			<header className='absolute h-full w-64 left-0 top-0 flex flex-col pl-4 py-6 border-r-2 border-r-[#202020] font-light'></header>
			<div className='w-[calc(100% - 16rem)] ml-64 pl-2'>
				<h1>Dashboard</h1>
				<h2>Hello user</h2>
			</div>
		</>
	);
};

export default Dashboard;
