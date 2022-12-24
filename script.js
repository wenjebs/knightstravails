class Knight {
    constructor(x, y) {
        this.X = x;
        this.Y = y;

    }
}

function knightMoves([initialX, initialY], [finalX, finalY]) {
    let knight = new Knight(initialX, initialY)
    let moves = [
        [1,2],
        [2,1],
        [2,-1],
        [1,-2],
        [-1,-2],
        [-2,-1],
        [-2,1],
        [-1,2]
    ]

    let queue = []
    let seen = new Set();
    let paths = []
    let count = 0;
    seen.add([initialX, initialY])
    while (knight.X !== finalX || knight.Y !== finalY) {
        count += 1;

        //Explore possible moves
        for (let i=0;i<moves.length;i++){
            let posX = knight.X+moves[i][0]
            let posY = knight.Y+moves[i][1]

            // Helper code to check for visited positions
            let containsMove = false
            for (let arr of seen) {
                if (arr.toString() === [posX, posY].toString()) {
                    containsMove = true;
                    break;
                }
            }
            
            // check if new position is within board and not visited before
            if (
                posX >= 0 && 
                posY >= 0 && 
                posX <= 7 && 
                posY <= 7 && 
                !containsMove
                ) {
                let path = {
                    origin = [knight.X, knight.Y];
                    next = [posX, posY]
                }
                paths.push(path)

                //Mark new position
                seen.add([posX, posY])

                //Add new position to queue
                queue.push([posX, posY])
            }
        } 

        currentMove = queue.shift();
        knight.X = currentMove[0]
        knight.Y = currentMove[1]

    }

    //Find the last move taken to get to the objective
    let finalPath;
    for (let path of paths) {
        if (path.next.toString()===`${finalX},${finalY}`) {
            finalPath = path
        }
    }

    // Create an array to store the paths taken
    let answer = [];
    // Push last move taken
    answer.push([finalPath.next])
    // Check moves taken to input the corresponding moves
    while (finalPath.origin.toString() !== `0,0`) {
        for (let path of paths) {
            if (path.next.toString()===finalPath.origin.toString()) {
                finalPath.next = path.next
                finalPath.origin = path.origin
                // console.log(finalPath)
                break;
            }
        }
        answer.push([finalPath.next])
    }

    answer.push([finalPath.origin])
    answer.reverse()
    console.log(`you took ${answer.length} steps!`)
    console.log('The path was:')
    for (let point of answer) {
        console.log(point.toString())
    }
    console.log(`the longest possible path was: ${count} steps`)
}