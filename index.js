const express = require('express');
const { resolve } = require('path');


const app = express();
require('dotenv').config()
const port = 3010;

app.use(express.static('static'));


const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
  if (process.env.IS_ADMIN === 'true') {
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.send({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000."))
