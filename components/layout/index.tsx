type LayoutPropsType = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
	return (
		<div className='w-screen max-w-[1368p] h-screen mx-auto relative text-white'>
			<header></header>
			<main className='w-full h-full'>{children}</main>
			<footer></footer>
		</div>
	);
};

export default Layout;
