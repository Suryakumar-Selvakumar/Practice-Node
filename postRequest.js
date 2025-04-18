const https = require("https");

const data = JSON.stringify({
    todo: "Buy the milk",
});

const options = {
    hostname: "whatever.com",
    port: 443,
    path: "/todos",
    method: "DELETE",
    header: {
        "Content-Type": "application/json",
        "Content-Length": data.length,
    },
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", d => {
        process.stdout.write(d);
    });
});

req.on("error", error => {
    console.error(error);
});

req.write(data);
req.end();

// const axios = require("axios");

// axios
//     .post("https://whatever.com/todos", {
//         todo: "Buy the milk",
//     })
//     .then(res => {
//         console.log(`statusCode: ${res.status}`);
//         console.log(res);
//     })
//     .catch(error => {
//         console.error(error);
//     });