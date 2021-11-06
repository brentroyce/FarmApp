const mongoose = require('mongoose')
const { schema } = mongoose;

const farmSchema = newSchema({
    name: {
        type: String, 
        required: [true, "Farm must have a name"]

    }
}