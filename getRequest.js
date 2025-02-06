const https = require("https");

const options = {
    hostname: "example.com",
    port: 443,
    path: "/todos",
    method: "GET",
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

req.end();

// const axios = require("axios");

// axios
//   .get("https://example.com/todos")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });