import csv from 'csvtojson';
import csv_schema from '../../models/csv_schema.js';

export const createCsv = async (req, res) => {
    try {
        var storeData = [];
        csv().fromFile(req.file.path).then(async (response) => {
            for (var i = 0; i < response?.length; i++) {
                const datas = {
                    customerId: response[i]?.CustomerId,
                    firstName: response[i]?.FirstName,
                    lastName: response[i]?.LastName,
                    company: response[i]?.Company,
                    city: response[i]?.City,
                    country: response[i]?.Country,
                    phoneNo: response[i]?.Phone1,
                    alternativeContactno: response[i]?.Phone2,
                    email: response[i]?.Email,
                    website: response[i]?.Website
                }
                storeData?.push(datas);
            }
            await csv_schema.insertMany(storeData);
            res.status(200).json({ message: "created csv files" })


        }).catch((error) => {
            res.status(404).json({ message: error })

        })

    } catch (error) {
        res.status(404).json({ message: error })
    }
}