import { createContext, useCallback, useContext, useState } from 'react';

interface IModalMovieInfoContextProps {
	toggleOpenMovieInfo: () => void;
	isOpenMovieInfo: boolean;
}

interface IModalMovieInfoContextPrps {
	children: React.ReactNode;
}

export const ModalMovieInfoContext = createContext({} as IModalMovieInfoContextProps);

export const ModalMovieInfoProvider = ({ children }: IModalMovieInfoContextPrps) => {
	const [isOpenMovieInfo, setIsOpenMovieInfo] = useState(false);

	const handleMovieInfoOnpened = useCallback(() => {
		setIsOpenMovieInfo(oldIsOpenMovieInfo => !oldIsOpenMovieInfo);
	}, []);

	return (
		<ModalMovieInfoContext.Provider value={{ toggleOpenMovieInfo: handleMovieInfoOnpened, isOpenMovieInfo }}>
			{children}
		</ModalMovieInfoContext.Provider>
	);
};

export const useModalMovieInfoContext = () => useContext(ModalMovieInfoContext);
