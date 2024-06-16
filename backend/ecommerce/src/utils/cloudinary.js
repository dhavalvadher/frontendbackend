const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dy8y4c1j9",
    api_key: "146787339574292",
    api_secret: "d0DPrbM6vMlBUaVZvVbdIrFNzN0"
});

const uploadFile = async (localPath, folderName) => {

    try {
        const uploadResult = await cloudinary.uploader.upload(localPath, {
            folder: folderName
        }).catch((error) => { console.log(error) });

        return uploadResult
    } catch (error) {
        console.log(error);
    }
  

}

module.exports = uploadFile