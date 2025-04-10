/**
 * Convert coordinates to an object with lat and lon keys
*/
export function formatCoordinates(coordinates) {
    if (!coordinates) {
        throw new Error('Invalid coordinate format');
    }

    // Case where we get an entire GeoJSON object as input.
    if (typeof coordinates === 'object' && coordinates.type === 'Point' && 'coordinates' in coordinates) {
        const coordinateArray = coordinates.coordinates;
        return {
            lat: coordinateArray[0],
            lon: coordinateArray[1]
        };
    }

    if (Array.isArray(coordinates) && coordinates.length === 2) {
        return {
            lat: coordinates[0],
            lon: coordinates[1]
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