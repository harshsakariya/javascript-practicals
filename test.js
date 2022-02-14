const arr = [2, 4, 3, 1];

function wait(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time*1000)
    })
}

async function main(arr) {
    for (const element of arr) {
       console.log(await wait(element));
    }
};

main(arr)


