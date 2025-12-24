import { useEffect, useState } from "react"

export const useWeather = (inputData: string) => {

    const [weather, setWeather] = useState('qweqwe')

    const updateWeatherData = () => {
        if(inputData === 'fromFooter'){
            setWeather('11111111111111');
        }
        else {
            setWeather('222222222222222');
        }
        
    }

    useEffect(()=>{
        console.log('fetch weather data');
        console.log('data fetched....');        
        console.log('data set');
    }, [])

   
    return weather;
}