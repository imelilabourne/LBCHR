import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http:landbank.com' : 'http://localhost:3000';
export const applicationUrl = baseUrl + '/application';