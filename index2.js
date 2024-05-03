const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("deta.json", "utf-8"));
const products = data.products;

const express = require("express");
const server = express();

//body parser
// server.use(express.json());
// server.use(express.urlencoded());
// server.use(express.static("public"));

server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
});

const auth = (req, res, next) => {
  console.log(req.query);

  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }

  // if (req.body.password == "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
};
// server.use(auth);

// server.get("/product/:id", auth, (req, res) => {
//   console.log(req.params);
//   res.json({ tye: "GET" });
// });
server.get("/", auth, (req, res) => {
  res.json({ tye: "GET" });
});

server.post("/", auth, (req, res) => {
  res.json({ tye: "POST" });
});

server.put("/", (req, res) => {
  res.json({ tye: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ tye: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ tye: "PATCH" });
});

//send file,status,json
server.get("/demo", (req, res) => {
  // res.sendStatus(404);
  // res.json(products);
  // res.sendFile("/Users/gauravsharma/Desktop/node-aap/index.html");
});

server.listen(7300, () => {
  console.log("Server Started");
});

/////////////-----------------node formate=>--------------------/////////////

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id);
//     console.log(product);
//     res.setHeader("Content-Text", "text/html");
//     let modifiedIndex = index
//       .replace("Morning Fresh", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("12.50", product.price)
//       .replace("4.3/5", product.rating);
//     res.end(modifiedIndex);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     default:
//       res.writeHead(404);
//       res.end("page not found");
//   }

//   console.log("server started");
// });

// server.listen(2024);
