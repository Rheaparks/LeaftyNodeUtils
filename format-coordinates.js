/**
 * Convert coordinates to an object with lat and lon keys
 * 
 * In PostGIS, coordinates are represented as an array of [lon, lat].
 * So if an array is passed, it is assumed to be in the format [lon, lat].
 * **Do not** pass a [lat lon] array.
 * 
 * Learn more: https://postgis.net/documentation/tips/lon-lat-or-lat-lon/
 * 
 * @returns {Object} An object with lat and lon keys
*/
export function formatCoordinates(coordinates) {
    if (!coordinates) {
        throw new Error('Invalid coordinate format');
    }

    // Case where we get an entire GeoJSON object as input.
    if (typeof coordinates === 'object' && coordinates.type === 'Point' && 'coordinates' in coordinates) {
        const coordinateArray = coordinates.coordinates;
        return {
            lat: coordinateArray[1],
            lon: coordinateArray[0]
        };
    }

    if (Array.isArray(coordinates) && coordinates.length === 2) {
        return {
            lat: coordinates[1],
            lon: coordinates[0]
        };
    } else if ('x' in coordinates && 'y' in coordinates) {
        return {
            lat: coordinates.x,
            lon: coordinates.y
        };
    } else if ('latitude' in coordinates && 'longitude' in coordinates) {
        return {
            lat: coordinates.latitude,
            lon: coordinates.longitude
        };
    } else {
        throw new Error('Invalid coordinate format');
    }
};