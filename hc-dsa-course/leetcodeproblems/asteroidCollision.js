/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    
    for (let asteroid of asteroids) {
        let explosion = false;

        while(stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0 ) {
            const rightMovingAsteroid = stack.pop();
            if(Math.abs(asteroid) === rightMovingAsteroid) {
                explosion = true;
                break;
            } else if(Math.abs(asteroid) < rightMovingAsteroid) {
                asteroid = 0;
                stack.push(rightMovingAsteroid);
                break;
                
            }
        } 
        if(!explosion && asteroid !== 0) {
            stack.push(asteroid);
        } 
        
        

        
    }
    return stack;
};