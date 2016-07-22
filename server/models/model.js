var userSchema = mongoose.Schema({
  name: { type: String, required: true },
  voted: { type: String, default: 0 }
})

var photoSchema = mongoose.Schema({
  name: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  tag: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: String, required: true }
})

mongoose.model('User', userSchema)
mongoose.model('Photo', photoSchema)
