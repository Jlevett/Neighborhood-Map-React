const CLIENT_ID='42ZJWV1GLYN44UMLKVSZHJEURASMIMHGZIDDGIBXQERFQEKT';
const CLIENT_SECRET='A2IYK5ONP2E1AGOXN4VYKVBUZL0RAFZIGW4EJDCTRQCPQ0CK';
const API = "https://api.foursquare.com/v2";
const VERSION = "20180703";

const RADIUS_M=250;
const SEARCH_RESULTS=1;

/**
*Returns a venue id from FourSquare when given the lat, lng & name.
*/
export const getSearchResult = (lat, lng, name) =>
  fetch(`${API}/venues/search?ll=${lat},${lng}&limit=${SEARCH_RESULTS}&radius=${RADIUS_M}&query=${name}
    &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
  .then(response=>response.json()).then(response=>response.response.venues[0].id).catch('error')


export const getDetails = (id) =>
  fetch(`${API}/venues/${id}?&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`)
  .then(res => res.json())
  .catch('error')

//size can be one of the following, where XX or YY is one of 36, 100, 300, or 500