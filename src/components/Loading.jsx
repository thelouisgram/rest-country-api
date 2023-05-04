import { useSelector } from 'react-redux';

const Loading = () => {
	const darkMode = useSelector((state) => state.theme.darkMode);

	return (
		<div className="w-full h-[100%] justify-center items-center flex">
			<div className={darkMode ? 'lds-spinner dark' : 'lds-spinner light'}>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};

export default Loading;
