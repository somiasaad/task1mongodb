const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const ConnectionUrl = "mongodb://127.0.0.1:27017";
const dbname = "task1";

mongoClient.connect(ConnectionUrl, (error, data) => {
  if (error) {
    return console.log("error");
  }
  console.log("Successfuly connected");

  const db = data.db(dbname);

  db.collection("Users").insertOne(
    {
      name: "Menna",
      age: 22,
    },
    (error, data1) => {
      if (error) {
        console.log("unable to insert data");
      }
      console.log(data1.insertedId);
    }
  );

  db.collection("Users").insertOne(
    {
      name: "Nour",
      age: 21,
    },
    (error, data1) => {
      if (error) {
        console.log("unable to insert data");
      }
      console.log(data1.insertedId);
    }
  );

  db.collection("Users").insertMany(
    [
      {
        name: "Reem",
        age: 23,
      },
      {
        name: "Ahmed",
        age: 27,
      },
      {
        name: "Maha",
        age: 27,
      },
      {
        name: "aya",
        age: 20,
      },
      {
        name: "Mostafa",
        age: 27,
      },
      {
        name: "Hana",
        age: 27,
      },
      { name: "Reham", age: 27 },
      {
        name: "Rawan",
        age: 24,
      },
      {
        name: "Ali",
        age: 26,
      },
      {
        name: "Salma",
        age: 23,
      },
    ],
    (error, data1) => {
      if (error) {
        console.log("unable to insert data");
      }
      //  console.log(data1.insertedCount)
    }
  );

  //  to get data that match filter

  db.collection("Users")
    .find({ age: 27 })
    .toArray((error, Users) => {
      if (error) {
        return console.log("error has occured");
      }
      console.log(Users);
    });
  // limit 3 27Y

  db.collection("Users")
    .find({ age: 27 })
    .limit(3)
    .toArray((error, Users) => {
      if (error) {
        return console.log("error has occured");
      }
      console.log(Users);
    });

  //    $set  name    for the first 4 doc

  db.collection("Users")
    .updateOne(
      { _id: mongodb.ObjectId("6432b4b3b74fa59e2336c23c") },
      {
        $set: { name: "Osama" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("Users")
    .updateOne(
      { _id: mongodb.ObjectId("6432b4b3b74fa59e2336c23d") },
      {
        $set: { name: "Ayman" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });
  db.collection("Users")
    .updateOne(
      { _id: mongodb.ObjectId("6432b4b3b74fa59e2336c23f") },
      {
        $set: { name: "Ahmed" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  db.collection("Users")
    .updateOne(
      { _id: mongodb.ObjectId("6432b4b3b74fa59e2336c240") },
      {
        $set: { name: "Mai" },
        $inc: { age: 4 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => {
      console.log(error);
    });

  //   updateMany  inc  {}   10

  db.collection("Users")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((data1) => {
      console.log(data1.modifiedCount);
    })
    .catch((error) => console.log(error));

  //   deleteMany  age : 41   => deletedCount

  db.collection("Users")
    .deleteMany({ age: 41 })
    .then((data1) => {
      console.log(data1.deletedCount);
    })
    .catch((error) => console.log(error));
});
