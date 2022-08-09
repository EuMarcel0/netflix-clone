import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { MoviesService } from '../../services/MoviesService/MoviesService';
import { INetflixOriginals } from '../../services/MoviesService/Types';

interface IModalMovieInfoContextProps {
	movie: INetflixOriginals | undefined;
	isOpenedMovieInfo: boolean;
	toggleMovieInfo: () => void;
}
interface IModalMovieInfoContextPrps {
	children: React.ReactNode;
}
export const ModalMovieInfoContext = createContext({} as IModalMovieInfoContextProps);

export const ModalMovieInfoProvider = ({ children }: IModalMovieInfoContextPrps) => {
	const [movie, setMovie] = useState<INetflixOriginals>();
	const [isOpenedMovieInfo, setIsOpenedMovieInfo] = useState(false);

	const handleMovieInfoOpened = useCallback(() => {
		setIsOpenedMovieInfo(oldIsOpenedMovieInfo => !oldIsOpenedMovieInfo);
	}, []);

	useEffect(() => {
		MoviesService.getAllNetflixOriginals()
			.then((response) => {
				if (response instanceof Error) {
					alert(response.message);
					return;
				} else {
					const randomNumber = Math.floor(Math.random() * response.results.length - 1);
					const chosenMovie = response.results[randomNumber].id;
					MoviesService.getAllNetflixOriginalsDetails(chosenMovie)
						.then((response) => {
							if (response instanceof Error) {
								alert(response.message);
								return;
							} else {
								setMovie(response);
							}
						});
				}
			});
	}, []);

	return (
		<ModalMovieInfoContext.Provider value={{ movie, toggleMovieInfo: handleMovieInfoOpened, isOpenedMovieInfo }}>
			{children}
		</ModalMovieInfoContext.Provider>
	);
};
export const useModalMovieInfoContext = () => useContext(ModalMovieInfoContext);
