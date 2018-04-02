
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west",
    directions = ["NORTH", "EAST", "SOUTH", "WEST"];

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        if (!Number.isInteger(x) || !Number.isInteger(y) || !(directions.includes(direction))) {
            throw new TypeError();
        }
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.directionIndex = directions.findIndex(dir => dir === this.direction);
    }

    left() {
        this.directionIndex -= 1;
        if (this.directionIndex < 0) { this.directionIndex = 3; }
    }
    
    right() {
        this.directionIndex += 1;
        if (this.directionIndex > 3) { this.directionIndex = 0; }
    }

    move(n) {
        switch (this.directions[this.directionIndex]) {
            case NORTH:
                this.y += n;
                break;
            case SOUTH:
                this.y -= n;
                break;
            case WEST:
                this.x -= n;
                break;
            case EAST:
                this.x += n;
                break;
            default:
                throw new TypeError();
        }
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }

    getDirection() {
        return this.directions[this.directionIndex];
    }
}
export { NORTH, EAST, SOUTH, WEST, Rover };
