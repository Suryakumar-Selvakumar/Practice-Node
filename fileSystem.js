import fs from "node:fs/promises";

const content = "New sync content!";

// fs.writeFile("test.txt", content, err => {
//     if(err) {
//         console.error(err);
//     } else {
//         // file written successfully
//     }
// });

// try {
//     fs.writeFileSync("test.txt", content);
//     // file written successfully
// } catch(err) {
//     console.error(err);
// }

// async function example() {
//     try {
//         const content = "Async content! x2";
//         await fs.writeFile("test.txt", content, { flag: "a+"})
//     } catch (err) {
//         console.log(err);
//     }
// }

// example();

// fs.appendFile("test.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done!");
//   }
// });

// async function example() {
//   try {
//     const content = "Append content!";
//     await fs.appendFile("test.txt", content);
//   } catch (err) {
//     console.log(err);
//   }
// }

// example();

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// try {
//   const data = fs.readFileSync("test.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

try {
  const data = await fs.readFile("test.txt", { encoding: "utf8" });
  console.log(data);
} catch (err) {
  console.error(err);
}
