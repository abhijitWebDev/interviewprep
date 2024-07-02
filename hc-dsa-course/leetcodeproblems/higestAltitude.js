/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let maxAltitude = currentAltitude;

    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        maxAltitude = Math.max(maxAltitude, currentAltitude);
        
    }
    return maxAltitude;
    
};