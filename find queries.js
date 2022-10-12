// Find method returns back you the cursor to which then you
// can apply other operations (that's why pretty() fails on findONne())

// Whenever you search for string it will display all the documents which have
// that string included but if you search for [] it will look for exact match

query = db.users.find({ hobbies: "cooking" });
output = [
  {
    _id: ObjectId("63467f95e8f09e356ac01ea3"),
    name: { FirstName: "John", LastName: "Doe" },
    age: "30",
    rating: "4",
    hobbies: ["dancing", "cooking", "surfing"],
  },
  {
    _id: ObjectId("63467f95e8f09e356ac01ea4"),
    name: { FirstName: "Jane", LastName: "Doe" },
    age: "32",
    rating: "5",
    hobbies: ["Netflix", "cooking", "Gardening"],
    address: {
      area: { code: "456454", locality: "Indiana Polis" },
      country: "US",
    },
  },
  {
    _id: ObjectId("63467f95e8f09e356ac01ea5"),
    name: { FirstName: "James", LastName: "Doe" },
    age: "25",
    rating: "5",
    hobbies: ["Hiking", "cooking", "Gymming"],
  },
];

query = db.users.find({ hobbies: ["cooking"] });
output = NA;

// finding in a range

query = db.users.find({ age: { $gt: "25" } });
output = [
  {
    _id: ObjectId("63467f95e8f09e356ac01ea3"),
    name: { FirstName: "John", LastName: "Doe" },
    age: "30",
    rating: "4",
    hobbies: ["dancing", "cooking", "surfing"],
  },
  {
    _id: ObjectId("63467f95e8f09e356ac01ea4"),
    name: { FirstName: "Jane", LastName: "Doe" },
    age: "32",
    rating: "5",
    hobbies: ["Netflix", "cooking", "Gardening"],
    address: {
      area: { code: "456454", locality: "Indiana Polis" },
      country: "US",
    },
  },
];

query = db.users.find({ age: { $gt: "25", $lt: "32" } });
output = [
  {
    _id: ObjectId("63467f95e8f09e356ac01ea3"),
    name: { FirstName: "John", LastName: "Doe" },
    age: "30",
    rating: "4",
    hobbies: ["dancing", "cooking", "surfing"],
  },
];
