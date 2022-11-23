import Head from "next/head";

type MetaPropsType = {
	title: string;
	description?: string;
};

const Meta = ({
	title,
	description = "A website for taking your notes",
}: MetaPropsType) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
		</Head>
	);
};

export default Meta;
