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
        // console.log(knight.X, knight.Y)
        for (let i=0;i<moves.length;i++){
            let posX = knight.X+moves[i][0]
            let posY = knight.Y+moves[i][1]
            let containsMove = false
            for (let arr of seen) {
                if (arr.toString() === [posX, posY].toString()) {
                    containsMove = true;
                    break;
                }
            }
            if (posX >= 0 && posY >= 0 && posX <= 7 && posY <= 7 && !containsMove) {
                let path = {}
                path.origin = [knight.X, knight.Y];
                path.next = [posX, posY]
                paths.push(path)
                seen.add([posX, posY])
                queue.push([posX, posY])
            }
        } 

        currentMove = queue.shift();
        knight.X = currentMove[0]
        knight.Y = currentMove[1]

    }

    let finalPath;
    let answer = [];
    for (let path of paths) {
        if (path.next.toString()===`${finalX},${finalY}`) {
            finalPath = path
        }
    }
    answer.push([finalPath.next])
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
    console.log(paths)
    answer.push([finalPath.origin])
    answer.reverse()
    console.log(`you took ${answer.length} steps!`)
    console.log('The path was:')
    for (let point of answer) {
        console.log(point.toString())
    }
}