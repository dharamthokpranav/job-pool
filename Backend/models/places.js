const { Schema, model, default: mongoose } = require("mongoose");

const bootcampSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },
  slug: String,
  DESCTIPTION: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [500, "Name cannot be more than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [500, "Name cannot be more than 50 characters"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please add valid email address",
    ],
  },
  Address: {
    type: String,
    required: [true, "Please add an addresss"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    type: [String],
    required: true,
    enum: ["web dev", "mob dev", "uiux"],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must can not be more than 10"],
  },
  avereagecost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobAssistance: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bootcamps", bootcampSchema);
