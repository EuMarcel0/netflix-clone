import { Environment } from '../../environment';
import { apiMovies } from '../Api/Axios-Config/Api';
import { IMoviesProps } from './Types';


const getMovies = async ( relativeURL: string ) => {
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
	getAllPopularMovies: async () => {
		return[
			{
				original_title: 'popular',
				title: 'Em alta para você',
				items: await getMovies(`movie/popular?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'trending',
				title: 'Tendências da semana',
				items: await getMovies(`trending/all/week?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'top_rated',
				title: 'Os melhores da atualidade',
				items: await getMovies(`movie/top_rated?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'originals_netflix',
				title: 'Originais Netflix',
				items: await getMovies(`discover/tv?with_network=213&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'action_genres',
				title: 'Mais ação para você',
				items: await getMovies(`discover/movie?with_genres=28&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'comedy_genres',
				title: 'Vamos dar risada',
				items: await getMovies(`discover/movie?with_genres=35&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'horror_genres',
				title: 'Afim de uma noite de Terror?',
				items: await getMovies(`discover/movie?with_genres=27&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'romance_genres',
				title: 'O amor está no ar',
				items: await getMovies(`discover/movie?with_genres=10749&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'popular_tv',
				title: 'Em alta na TV',
				items: await getMovies(`tv/popular?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'to_rate_tv',
				title: 'Os melhores da TV',
				items: await getMovies(`tv/top_rated?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'on_the_air_tv',
				title: 'TV no ar',
				items: await getMovies(`tv/on_the_air?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'air_today_tv',
				title: 'No ar hoje TV',
				items: await getMovies(`tv/airing_today?api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			},
			{
				original_title: 'documentary',
				title: 'Documentários',
				items: await getMovies(`discover/movie?with_genres=99&api_key=${Environment.API_KEY_GET_MOVIES}&language=${Environment.API_MOVIE_LANG}`),
			}
		];
	}
};
