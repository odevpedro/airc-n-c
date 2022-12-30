const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')


const app = ppexpress();

mongoose.connect('mongodb+srv://ohmeninolindo:CfN2h5P7j12nhSGd@cluster0.jtb0n5b.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use(express.json());
app.use(routes);

app.listen(3333)