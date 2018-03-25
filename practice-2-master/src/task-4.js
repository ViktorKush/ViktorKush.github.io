export default function runRover(commandsList) {
    let direction = 0,
        distance,
        dislocation = {
            x: 0,
            y: 0
        };
    const directions = ["north", "east", "south", "west"];
    let filtered = commandsList
        .sort((a, b) => a.order - b.order)
        .filter((x) => x.command === 'turn left' || x.command === 'turn right' || ((x.command.split(" ")[0] === "go") && (+(x.command.split(" ")[1])) ^ 0) === (+(x.command.split(" ")[1])));

    function move() { //проверяет направление и выполняет движение, рассчитывая координаты
        switch (directions[direction]) {
            case "east":
                dislocation.x += distance;
                break;
            case "west":
                dislocation.x -= distance;
                break;
            case "north":
                dislocation.y += distance;
                break;
            case "south":
                dislocation.y -= distance;
                break;
        }
    };

    function applyCommand() {
        filtered.reduce((acc, comm) => {
            switch (comm.command) {
                case "turn left":
                    direction--;;
                    if (direction < 0) {
                        direction = 3
                    };
                    break;
                case "turn right":
                    direction++;
                    if (direction > 3) {
                        direction = 0
                    };
                    break;
                default:
                    distance = Number(comm.command.split(" ")[1]);
                    move()
                    break;
            }
        }, 0);
    }
    applyCommand(commandsList);
    return dislocation;
}
