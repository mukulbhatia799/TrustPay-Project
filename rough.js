// okishh syntax.
// async function main2() {
//     await fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response => {
//         const json = await response.json();
//         console.log(json.todos.length);
//     })
// }


// // good syntax
// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos");
//     const json = await response.json();
//     console.log(json.todos.length);
// }

// better syntax
const axios = require('axios');
async function main3() {
    const response = await axios.post("https://httpdump.app/dumps/3f446c30-5e19-4651-b88e-e8424866903f", {}, {
        headers: {
            authentication: "Bearer flskfj slfkjs;dl s;lfkjsd;l kj;lfdk jd;lkj ",
            mukulbhatia: "lsdkfj lsfkjsldj ;lsdfkj ;lfk j;l"
        }
    });
    console.log(response.data);
}

// main();
// main2();
main3();