const express = require('express');
const app = express();
require ("dotenv").config();

PORT= process.env.PORT
app.listen(PORT,()=> {
    console.log("server is running on PORT", PORT)
})