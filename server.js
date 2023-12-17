import server from "./index.js";

server.listen(3200, (err) => {
  if (err) {
    console.log(`Some Error is Occure : ${err}`);
    return;
  }
  console.log("Server is Up and Run on Port : 3200");
});
