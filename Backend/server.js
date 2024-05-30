const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
// const connectDB = require("./config/db");

//Express init
const app = express();

//body parser

app.use(express.json());

//Environment variable initialization
dotenv.config({ path: "./config.env" });

//Import router
const jobsroute = require("./routes/jobs");

if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}

//mount router
app.use("/api/v1/jobs", jobsroute);

const PORT = process.env.PORT || 3000;

const server = app.listen(
  PORT,
  console.log(`Server runing on ${PORT} in ${process.env.NODE_ENV} mode`)
);

//handle unhandled rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled rejection error:${err.message}`);
  //close the server and exit process

  server.close(() => {
    process.exit(1);
  });
});

// const { graphql, buildSchema } = require("graphql");
// const { Query } = require("mongoose");
// var schema = buildSchema(`type Query{hello:String}`);

// var rootValue = {
//   hello: () => {
//     return "Hello world!!";
//   },
// };

// graphql({ schema, source: "{hello}", rootValue })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
