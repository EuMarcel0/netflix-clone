import { apiLogin } from '../Api/Axios-Config/Api';


export interface ILoginService {
	token: string;
}

export const getToken = async (email: string, password: string): Promise<ILoginService | Error> => {
	try {
		const {data} = await apiLogin.post('login', {email: email, password: password});
		if(data){
			return data;
		}
		return new Error('Erro ao fazer login');
	}catch(error){
		return new Error((error as {message: string}).message || 'Erro ao fazer login');
	}
};

export const LoginService = {
	getToken,
};

