import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
	if(error.message === 'Network Error') {
		return Promise.reject(new Error('Erro de conexão com o servidor'));
	}
	return Promise.reject(error);

};
