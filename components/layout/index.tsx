import { useRouter } from "next/router";
import Footer from "./footer";

type LayoutPropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
	const pathName = useRouter().asPath;
	return (
		<div className='w-screen max-w-[1368p] h-screen mx-auto relative text-white'>
			<header></header>
			<main className='w-full h-full'>{children}</main>
			{pathName === "/" && (
				<footer className='w-full h-28 absolute left-0 bottom-0 flex items-center justify-center'>
					<Footer />
				</footer>
			)}
		</div>
	);
};

export default Layout;
