import "dotenv/config"

if(process.env.NODE_ENV === "prod") {
  console.log("Yay! We're in Production mode!")
}

console.log(process.env.VIDEO_URL)