import * as express from 'express';
import * as mongoose from "mongoose";
import Shops from './models/shops';

const app = express();
app.listen(5000, () => {
    console.log('started my server');
});

let mongodbUrl:any = "";
mongoose.connect(mongodbUrl, {useNewUrlParser: true})
    .then((data) => {
        console.log('connected to database');
    });

app.get('/shops', (req, res, next) => {
    const options = {
        location: {
            $geoWithin: {
                $centerSphere: [[77.4520708, 28.68467], 15 / 3963.2]
            }
        }
    }
    Shops.find(options).then(data => {
        res.send(data);
    })
})
