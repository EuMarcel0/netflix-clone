import { Environment } from '../../environment';
import { apiMovies } from '../Api/Axios-Config/Api';


interface IGetAllMoviesAndSeriesProps{
	relativeURL: string;
}

const getAllMoviesAndSeries = async ( relativeURL: string ) : Promise<IGetAllMoviesAndSeriesProps|Error>=> {
	try{
		const { data } = await apiMovies.get(`${Environment.BASE_URL_MOVIES}${relativeURL}`);
		if(	data ){
			return data;
		}
		console.log(data);
		return new Error('Erro ao consultar dados');
	}catch(error){
		return new Error((error as {message: string}).message || 'Erro ao consultar dados');
	}
};

export const MoviesService = {
	getMovies: async () => {
		return [
			{
				title: 'popular',
				description: 'Populares Netflix',
				movies: await  getAllMoviesAndSeries(`movie/popular?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'top_rated',
				description: 'Em alta',
				movies: await  getAllMoviesAndSeries(`movie/top_rated?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'latest',
				description: 'Lançamentos',
				movies: await  getAllMoviesAndSeries(`movie/latest?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'tv_popular',
				description: 'Dramas para TV',
				movies: await  getAllMoviesAndSeries(`tv/popular?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'tv_on_the_air',
				description: 'No ar TV',
				movies: await  getAllMoviesAndSeries(`tv/on_the_air?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'tv_latest',
				description: 'Os mais recentes para TV',
				movies: await  getAllMoviesAndSeries(`tv/latest?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'discover',
				description: 'Documentários',
				movies: await  getAllMoviesAndSeries(`discover/movie?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				title: 'play_again',
				description: 'Assistir novamente',
				movies: await  getAllMoviesAndSeries(`movie/top_rated?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
		];
	},
};
