const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  lastDonationDate: { type: Date },
});

const Donor = mongoose.model('Donor', donorSchema);

module.exports = Donor;
