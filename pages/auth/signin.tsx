import Link from "next/link";
import Head from "../../components/meta";
import React from "react";
import { Spinner } from "../../components";
import { loginUser } from "../../utils/supabase";

const Signin = () => {
	const [[email, password], setCreds] = React.useState(["", ""]);
	const [loading, setLoading] = React.useState(false);

	const onLoginUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setLoading(true);
			const user = await loginUser({ email, password });
			console.log(user);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<>
			<Head title='Notes / sign-in' />
			<form className='auth-form' onSubmit={onLoginUser}>
				<div className='mb-6'>
					<div className='text-3xl mb-3'>Welcome back</div>
					<div className='text-xs text-gray-200/50'>
						{" "}
						Sign in to your account
					</div>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='email'
						className='text-sm text-gray-200/50 mb-2 block'
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						className='auth-input text-xs'
						placeholder='john@doe.com'
						onChange={({ currentTarget }) =>
							setCreds([currentTarget.value, email])
						}
					/>
					<div className='text-[11px] my-2 text-white/70'>
						Email is required *
					</div>
				</div>
				<div className='mb-6'>
					<label
						htmlFor='password'
						className='text-sm text-gray-200/50 mb-2 flex justify-between'
					>
						Password
						<button className='text-xs text-gray-200/80 hover:text-gray-200/60'>
							Forgot password?
						</button>
					</label>
					<input
						type='password'
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
				</div>
				<div className='h-11 relative'>
					<button
						type='submit'
						className='primary-btn disabled:bg-[#161616]'
						disabled={loading}
					>
						{loading ? <Spinner className='loading-spinner' /> : "Sign In"}
					</button>
				</div>
				<div className='text-xs mt-8 text-center'>
					<span className='text-gray-200/50'>Don{"'"}t have an account?</span>{" "}
					<Link
						href='/auth/signup'
						className='underline hover:text-gray-200/50'
					>
						Sign Up Now
					</Link>{" "}
				</div>
			</form>
		</>
	);
};

export default Signin;
