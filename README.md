# Unit-testing-and-documentation-
day 11 Backend| Unit testing and documentation 
4 topics
-> Dev dependencies
-> Env variable
-> Unit testing
-> documentation

dev dependencies are for developers 
chai and mocha are for -> unit testing
swagger -> documentation 
we install dev dependencies by npm install --save-dev chai chai-http morgan

Environment variable
GLobal/local where we are using this file it its global we can just write .py and it know the path where python is installed

while writing code if we want to hide some varibales like discord or stripe key then
we should use 
.env this file do not have front name like index.html and user.js upload proviate info 
in this and keep all this in .gitignore then it will never be uploaded
we have to install dotenv npm module
in index.js we will write  require ("dotenv").config();
 const PORT = process.env.PORTn


Unit testing
we have to test the edge cases before delevering it to the client 
return a/b in this we have to see the edge cases
some companies follow test driven development so we have write 

test cases-> the do the developement
not the other way round

chai is there to write the test cases and mocha is to run the test cases

in chai we have describe () in which we have it("",()=> which
takes the call back and in assertion we have to have true or 
false value

Documentation
we have node module called JSDocs it reads the comments and convert them into html file

so we have to require the node module named as const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
we can do documentation with UI and api testing on swagger learn before joining the company
