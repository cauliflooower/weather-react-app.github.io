import axios, {AxiosResponse} from 'axios';
import { Weather } from '../store/types/types';
import api from '../axios';

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return api<Weather>({
            method: 'get',
            url: `/weather?q=${city}&units=metric&`
        });
    };
};