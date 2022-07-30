import axios from 'axios';
import { Environment } from '../../../environment';
import { errorInterceptor, responseInterceptor } from './Interceptors';


export const apiLogin = axios.create({
	baseURL: Environment.BASE_URL_LOGIN_AUTHENTICATION,
});

export const apiMovies = axios.create({
	baseURL: Environment.BASE_URL_MOVIES,
});


apiLogin.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error),
);

apiMovies.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error),
);




