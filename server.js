const express = require('express');
const app = express();
const port= 3000;
const {graphqlHTTP} = require ('express-graphql');
const { graphql, buildSchema } = require('graphql');

let schema = buildSchema(`
    type Query {
        hello: String
    }
`) 
let root = {
    hello: () =>{
        return 'hello world';
        },
};

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
    })
)

app.get('/',(req,res) => res.send('hello worldss'));
app.listen (port,() => console.log("corriendo.."));