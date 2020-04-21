import { SET_YEAR } from '../constants/Main'

export function setYear(year) {

    return {
      type: SET_YEAR,
      payload: year
    }
  
  }