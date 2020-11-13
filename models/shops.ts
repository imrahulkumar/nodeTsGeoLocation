import * as mongoose from "mongoose";
import {model} from "mongoose";

const shopSchema = new mongoose.Schema({
    location: {type: Object, required: true},
    title: {type: String, required: true},
});

export default model('shops', shopSchema);
