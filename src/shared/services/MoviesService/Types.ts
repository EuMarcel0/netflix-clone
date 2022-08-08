export interface IPopularMovies{
	adult: boolean;
	backdrop_path: string | null;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export type TMoviesProps = {
	original_title: string;
    title: string;
	items: {
		page: number;
		results: IPopularMovies[];
		total_pages: number;
		total_results: number;
	};
}

export interface INetflixOriginals{
	backdrop_path: string | null;
	created_by: any[];
	episode_run_time: number[];
	first_air_date: string;
	genres: INetflixOriginalsGenres[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: INetflixOriginalsLastEpisodeToAir[];
	name: string;
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string | null;
	production_companies: any[];
	budget: number;
	imdb_id: string;
	original_title: string;
	production_countries: any[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: any[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	type: string;
	seasons: any[];
}

export interface INetflixOriginals{
	page: number;
	results: IPopularMovies[];
	total_pages: number;
	total_results: number;
}

export interface INetflixOriginalsGenres{
	id: number;
	name: string;
}

export interface INetflixOriginalsLastEpisodeToAir{
	air_date: string;
	episode_number: number;
	id: number;
	name: string;
	overview: string;
	production_code: string;
	season_number: number;
	still_path: string | null;
	vote_average: number;
	vote_count: number;
}

