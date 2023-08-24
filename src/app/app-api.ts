type ConditionType = {
  icon: string;
  text: string;
};

export type ForeCastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    maxtemp_f: number;
    mintemp_f: number;
    condition: ConditionType;
  };
};

export interface AppApi {
  current: {
    temp_c: number;
    temp_f: number;
    condition: ConditionType;
    wind_mph: number;
    wind_degree: number;
    humidity: number;
  };
  forecast: {
    forecastday: ForeCastDay[];
  };
}
