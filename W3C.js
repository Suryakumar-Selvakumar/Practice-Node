import http from "node:http";
import fs from "node:fs";
import url from "node:url";
import { upperCase } from "upper-case";
import EventEmitter from "node:events";
import formidable, { IncomingForm } from "formidable";
import { createTransport } from "nodemailer";

// http
//   .createServer(function (req, res) {
//     fs.readFile("demofile1.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.open("mynewfile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
//   if (err) throw err;
//   console.log("Updated!");
// });

// fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
//   if (err) throw err;
//   console.log("Replaced!");
// });

// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

// const adr = "http://localhost:8080/default.htm?year=2017&month=february";
// const q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// const qdata = q.query;
// console.log(qdata.month);

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("404 Not Found");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(upperCase("Hello World!"));
//     res.end();
//   })
//   .listen(8080);

// const rs = fs.createReadStream("./mynewfile3.txt");
// rs.on("open", function () {
//   console.log("The file is open");
// });

// const eventEmitter = new EventEmitter();

// const myEventHandler = function () {
//   console.log("I hear a scream!");
// };

// eventEmitter.on("scream", myEventHandler);

// eventEmitter.emit("scream");

// http
//   .createServer(function (req, res) {
//     if (req.url == "/fileupload") {
//       const form = new IncomingForm();
//       form.parse(req, function (err, fields, files) {
//         const oldpath = files.filetoupload[0].filepath;
//         const newpath = "./" + files.filetoupload[0].originalFilename;
//         fs.rename(oldpath, newpath, function (err) {
//           if (err) throw err;
//           res.write("File uploaded and moved!");
//           res.end();
//         });
//       });
//     } else {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(
//         '<form action="fileupload" method="post" enctype="multipart/form-data">'
//       );
//       res.write('<input type="file" name="filetoupload"><br>');
//       res.write('<input type="submit">');
//       res.write("</form>");
//       return res.end();
//     }
//   })
//   .listen(8080);

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "ssuryakumar2077@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "ssuryakumar2077@gmail.com",
  to: "suryainvisol@gmail.com",
  subject: "Sending Email with HTML content using Node.js",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
