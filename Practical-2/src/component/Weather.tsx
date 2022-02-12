/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
import {WeatherInfo} from './Interface';

const Weather = (): JSX.Element => {
    const [search, setSearch] = useState<string>('surendranagar');
    const [input, setInput] = useState<string>('');
    const [data, setData] = useState<WeatherInfo>({});

    useEffect((): void => {
        const weatherApi = async (): Promise<void> => {
            try {
                const response: Response = await fetch(
                    `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe62a5a7ab625d3395e7af85e6585513&units=metric`,
                );
                const res = await response.json();
                console.log(res);

                setData({
                    city: res.name,
                    country: res.sys.country,
                    temp_Min: res.main.temp_min,
                    temp_Max: res.main.temp_min,
                    weather: res.weather[0].main,
                    description: res.weather[0].description,
                    temperature: res.main.temp,
                    speed: res.wind.speed,
                    humidity: res.main.humidity,
                });
            } catch (err) {
                console.log(err);
            }
        };
        weatherApi();
    }, [search]);

    const {
        city,
        country,
        temp_Min,
        temp_Max,
        weather,
        description,
        temperature,
        speed,
        humidity,
    } = data;

    const showWeather = (e: {preventDefault: () => void}) => {
        e.preventDefault();
        setSearch(input);
    };
    const d: Date = new Date();
    const date: number = d.getDate();
    const year: number = d.getFullYear();
    const month: string = d.toLocaleString('default', {month: 'long'});
    const day: string = d.toLocaleString('default', {weekday: 'long'});

    return (
        <>
            <div className="container pb-5 mt-5">
                <div className="row justify-content-center ">
                    <div className="col-md-6 ">
                        <div className="card text-white text-center">
                            <div className="box_style">
                                <form onSubmit={showWeather}>
                                    <div className="input-group mb-4 w-75 mx-auto mt-4">
                                        <input
                                            type="Search"
                                            className="form-control"
                                            placeholder="Search City"
                                            value={input}
                                            onChange={(eve) =>
                                                setInput(eve.target.value)
                                            }
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="input-group-text">
                                            <i className="fas fa-search"> </i>
                                        </button>
                                    </div>
                                </form>
                                <div className="bg-opacity-100 py-3">
                                    <h2 className="card-title">
                                        {city}, {country}
                                    </h2>
                                    <p className="card-text lead pb-3">
                                        {day}, {month} {date}, {year}
                                    </p>
                                    <hr />
                                    <i className="fa fa-street-view fa-3x pb-3 mt-3"></i>
                                    <h2 className="fw-bolder mb-3">
                                        {temperature}&deg;C
                                    </h2>
                                </div>
                                <p className="lead fw-bolder mb-0">{weather}</p>
                                <p className="lead ">
                                    Min :{temp_Min}&deg;C | Max : {temp_Max}
                                    &deg;C
                                </p>

                                <div className="container row-4 pt-5 desc_style text-white mt-5 pb-5">
                                    <div className="row">
                                        <p className="col-6">
                                            <i className="fas fa-wind fa-2x col"></i>
                                            {speed} km/h | Wind
                                        </p>
                                        <p className="col-6">
                                            <i className="fas fa-cloud-sun fa-2x col"></i>
                                            {humidity} | Humidity
                                        </p>
                                    </div>
                                    <div className="row">
                                        <p className="col-12">
                                            <i className="fas fa-sun fa-2x col"></i>
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Weather;
