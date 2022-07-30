import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
	if(error.message === 'Request failed with status code 400') {
		return Promise.reject(new Error('Dados incorretos. Por favor verifique.'));
	}
	return Promise.reject(error);

};
