// import http from "node:http";

// const options = {
//     hostname: "localhost",
//     port: 8000,
//     path: "/",
//     method: "GET",
// };

// const req = http.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on("data", d => {
//         process.stdout.write(d);
//     });
// });

// req.on("error", error => {
//     console.error(error);
// });

// req.end();

import axios from "axios";

axios
  .get("http://localhost:8000")
  .then((res) => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });