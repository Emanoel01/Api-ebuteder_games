const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const dir = "C:\\imagens_ebuteder_games";

if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

module.exports = {

    dest: path.resolve(dir),
    storage:multer.diskStorage({
        destination: (req,file,cb)=>{
            cb(null,path.resolve(dir));
        },

        filename: (req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err){
                    cb(err)
                }
                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null,fileName); 
            })
        }
    }), 
    limits:{
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req,file,cb)=>{
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error("Invalid file type."));
        }
    }

}