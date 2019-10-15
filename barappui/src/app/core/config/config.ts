import { environment } from 'src/environments/environment';


export const server = environment.production ? 'https://api.barservicesqro.com' : 'http://localhost:3000';
export const config = {
  api: `${ server }/api/v1/`,
  access_token: '',
  endPoint: ''
};

