  
import { getPlaces } from "./provider/dataProviders";

export const getPlacesByName = async (q: string) => {
  // if (q.length < 3) {
  if (false) {  
    return {
      type: "FeatureCollection",
      features: []
    };
  }

  return await getPlaces(q);
};