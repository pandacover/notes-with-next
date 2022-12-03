import React from "react";
import { useRouter } from "next/router";
import { createUser } from "../utils/supabase";
import { Spinner, Head } from "../components";
import { IoBookOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
	const router = useRouter();

	const onStartWithNotes = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		router.push("/auth/signup");
	};

	return (
		<>
			<Head title='Notes / home' />
			<div className='text-center md:text-left md:w-4/6 h-5/6 mx-auto flex flex-col justify-center gap-6'>
				<div className='text-4xl text-emerald-500 font-medium'>
					Create and Save your Notes
				</div>
				<div>
					<span className='font-semibold'>{'"Notes"'}</span> is a place to store
					all your notes in. A collection of your data in a place
					<br />
					which is quick and easy to access
				</div>
				<div className='justify-center md:justify-start h-10 flex gap-2 items-center'>
					<button
						onClick={onStartWithNotes}
						className='text-sm bg-emerald-500 hover:bg-emerald-400 w-36 h-full rounded-md'
					>
						Start with notes
					</button>
					<Link
						href='/docs'
						className='flex text-sm bg-[#202020] w-40 h-full rounded-md justify-center items-center gap-2 hover:bg-[#242424]'
					>
						<IoBookOutline /> Documentation
					</Link>
				</div>
			</div>
		</>
	);
}
