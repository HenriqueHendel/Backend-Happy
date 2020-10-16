import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const destination =  path.resolve(__dirname, "..", "..", "..", "..", "upload");

export default {
    destination,
    storage: multer.diskStorage({
        destination,
        filename: (request, file, callback) =>{
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;

            return callback(null, fileName)
        }
    })
};