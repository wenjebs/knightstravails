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
    while (knight.X !== finalX && knight.Y !== finalY) {
        for (let i=0;i<moves.length;i++){
            let posX = knight.X+moves[i][0]
            let posY = knight.Y+moves[i][1]
            if (posX > 0 && posY > 0 && posX < 7 && posY < 7) {
                queue.push([posX, posY])
            }
        }
        queue.forEach((move) => {
            let posX = move[0]
            let posY = move[1]
            if (posX > 0 && posY > 0 && posX < 7 && posY < 7) {
                queue.push(move)
            }
        })
        currentMove = queue.shift();
        knight.X = currentMove[0]
        knight.Y = currentMove[1]
        console.log(currentMove)
    }
    // for (let i=0;i<moves.length;i++){
    //     queue.push([initialX+moves[i][0],initialY+moves[i][1]])
    // }
    // console.log(queue)
}