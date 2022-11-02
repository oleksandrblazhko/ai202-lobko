import mongoose from 'mongoose';
const { Schema } = mongoose;

const guard = new Schema({
    "name": String,
    "price": Number,
    "height": String,
    "weight": String
});

const GuardList = new Schema({
    "country": String,
    "city": String
});

const PlaceOfClearAir = new Schema({
    "coordinates": String,
});

const Map = new Schema({
    "country": String,
    "city": String
});

const Permission = new Schema({
    "result": Boolean,
});

const Client = new Schema({
    "name": String,
    "phone": String
});
