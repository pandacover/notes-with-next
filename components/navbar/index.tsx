import React from "react";
import { UserResponse } from "@supabase/supabase-js";
import { logoutUser } from "../../utils/supabase";
import { useRouter } from "next/router";
import { IoIosLogOut } from "react-icons/io";

type componentProps = {
	user: UserResponse["data"]["user"];
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ user, setLoading }: componentProps) => {
	const router = useRouter();

	const onLogoutUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setLoading(true);
		logoutUser()
			.then(() => router.replace("/auth/signin"))
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	};
	return (
		<>
			<div className='font-medium flex-1'>Blogpad</div>
			<div className='flex-[10] overflow-y-scroll'></div>
			<nav className='w-full flex flex-col gap-6 text-[13px] flex-1'>
				<div>{user?.email?.split("@")[0]}</div>
				<div>
					<button onClick={onLogoutUser} className='flex items-center gap-2'>
						<span>
							<IoIosLogOut />
						</span>
						Logout
					</button>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
