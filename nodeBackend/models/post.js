const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  }
},
{
  collection:'posts'
});

// I used "" in the second parameter of the below mongoose.model function which caused me a MissingSchemaError.. take a note
module.exports = mongoose.model("Post",postSchema);
