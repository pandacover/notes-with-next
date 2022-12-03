import Link from "next/link";
import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Spinner, Head } from "../../components";
import { createUser } from "../../utils/supabase";
import { useRouter } from "next/router";

const Signup = () => {
	const [[email, password], setCreds] = React.useState(["", ""]);
	const [passToggle, setPassToggle] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const onTogglePassword = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		setPassToggle(!passToggle);
	};

	const onCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			await createUser({ email, password });
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Head title='Notes / sign-up' />
			<form className='auth-form' onSubmit={onCreateUser}>
				<div className='mb-6'>
					<div className='text-3xl mb-3'>Get started</div>
					<div className='text-xs text-gray-200/50'> Create a new account</div>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='email'
						className='text-sm text-gray-200/50 mb-2 block'
					>
						Email
					</label>
					<input
						disabled={loading}
						type='email'
						name='email'
						id='email'
						className='auth-input text-xs'
						placeholder='john@doe.com'
						onChange={({ currentTarget }) =>
							setCreds([currentTarget.value, password])
						}
					/>
					<div className='text-[11px] my-2 text-white/70'>
						Email is required *
					</div>
				</div>
				<div className='mb-6 relative'>
					<label
						htmlFor='password'
						className='text-sm text-gray-200/50 mb-2 block'
					>
						Password
					</label>
					<input
						disabled={loading}
						type={passToggle ? "text" : "password"}
						name='password'
						id='password'
						className='auth-input text-xs'
						placeholder='password'
						onChange={({ currentTarget }) =>
							setCreds([email, currentTarget.value])
						}
					/>
					<div className='text-[11px] my-2 text-white/70'>
						Password is required *
					</div>
					<button
						aria-label='toggle password'
						onClick={onTogglePassword}
						className='w-8 h-8 flex justify-center items-center absolute rounded-md right-2 top-[34px] bg-[#191919] hover:bg-[#161616]'
					>
						{passToggle ? <FaRegEyeSlash /> : <FaRegEye />}
					</button>
				</div>
				<div className='h-11 relative'>
					<button
						type='submit'
						className='primary-btn disabled:bg-[#161616]'
						disabled={loading}
					>
						{loading ? <Spinner className='loading-spinner' /> : "Sign Up"}
					</button>
				</div>
				<div className='text-xs mt-8 text-center'>
					<span className='text-gray-200/50'>Have an account?</span>{" "}
					<Link
						href='/auth/signin'
						className='underline hover:text-gray-200/50'
					>
						Sign In Now
					</Link>{" "}
				</div>
			</form>
		</>
	);
};

export default Signup;
