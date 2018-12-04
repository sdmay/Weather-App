import { Request, Response, NextFunction } from 'express';
import weather from 'openweather-apis';

import axios from 'axios';

export async function checkCity(req: Request, res: Response, next: NextFunction) {
    console.log(req.params.city, req.params.state)
    const userState = req.params.state.toLowerCase().trim()
    const placeCheck = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.params.city}+${req.params.state}&types=geocode&key=AIzaSyAWBYAZ4AEWK43DLuQavIu_DljgTIwgYGY`)
    const placeData = await placeCheck.data
    let location = placeData.predictions[0].description.split(', ')
    const stateCheck = location.includes(req.params.state.toUpperCase())
    if (stateCheck) {
        next()
    } else {
        const cityName = req.params.city[0].toUpperCase() + req.params.city.substr(1)
        const stateName = userState.toUpperCase()
        res.send({error: `${cityName} could not be found in ${stateName}`})
    }
    
}

export async function getTemp(req: Request, res: Response) {
    weather.setAPPID('9cd30a7407eff78fc8377ef08f5b6ffd')
    weather.setCity(req.params.city);
    weather.setUnits('imperial');
    weather.getTemperature((err: any, temp: any) => {
      console.log(temp);
      res.send({temperature: Math.round(temp)})
  });
}