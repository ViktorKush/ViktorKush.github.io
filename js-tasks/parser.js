var firstObj = {
    a: 1,
    b: "2",
    c: {
        d: 3,
        e: 4
    },
    f: 5
}


function parse(testObj) {
    for (const prop in testObj) {
        if ((typeof testObj[prop] === 'object') || (typeof testObj[prop].isArray)) {
            parse(testObj[prop]);
        }
        else {
            console.log(`${prop}: ${testObj[prop]}`);
        }
    }
}
parse(firstObj);

/*

І у консоль має бути виведено:
a: 1
b: 2
c.d: 3
c.e: 4

*/
