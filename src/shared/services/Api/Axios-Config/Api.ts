import axios from 'axios';
import { Environment } from '../../../Environment';
import { errorInterceptor, responseInterceptor } from './Interceptors';


const apiLogin = axios.create({
	baseURL: Environment.BASE_URL,
});

apiLogin.interceptors.response.use(
	(response) => responseInterceptor(response),
	(error) => errorInterceptor(error),
);

export default apiLogin;
