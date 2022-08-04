import { Environment } from '../../environment';
import { apiMovies } from '../Api/Axios-Config/Api';
import { IMoviesProps } from './Types';


const getAllPopularMovies = async ( ) : Promise<IMoviesProps | Error> => {
	const relativeURL = `movie/popular?api_key=${Environment.API_KEY_GET_MOVIES}&${Environment.API_MOVIE_LANG}`;
	try{
		const { data } = await apiMovies.get(`${Environment.BASE_URL_MOVIES}${relativeURL}`);
		if(	data ){
			return data;
		}
		return new Error('Erro ao consultar dados');
	}catch(error){
		return new Error((error as {message: string}).message || 'Erro ao consultar dados');
	}
};

export const MoviesService = {
	getAllPopularMovies,
};
