export interface SingleDate {
    condition: string;
    date: string;
    description: string;
    min: number;
    max: number;
    weekday: string;
}

export interface HighlightedDate {
    city: string;
    city_name: string;
    condition_code: string;
    condition_slug: string;
    date: string;
    description: string;
    forecast: SingleDate[];
    humidity: string;
    temp: number;
    time: string;
    wind_speedy: string;
}