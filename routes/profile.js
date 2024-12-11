var express = require('express');
var router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('form.html');
});

router.post('/', upload.single('avatar'), function (req, res, next) {
    console.log(req.file)
    // req.body will hold the text fields, if there were any
    res.send("Jasota")
})

//--------------------------------------------------------------------------------------//
      
    //FITXATEGI IZENA ALDATU
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '/public/uploads')
        },
        //filename: function (req, file, cb) {
          //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
          //cb(null, file.fieldname + '-' + uniqueSuffix)
        //}

        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const extension = path.extname(file.originalname); // izena
            cb(null, file.fieldname + '-' + uniqueSuffix + extension); 
        }
      })

      const upload1 = multer({ storage: storage })


        // Fitxategiaren iragazkia eta mugak
        const upload2 = multer({
            storage: storage,
            limits: {
                fileSize: 2 * 1024 * 1024 // Gehienezko tamaina: 2MB
            },
            fileFilter: function (req, file, cb) {
                // Bakarrik PNG fitxategiak onartu
                if (file.mimetype === 'image/png') {
                    cb(null, true); // Onartu fitxategia
                } else {
                    cb(new Error('Bakarrik PNG fitxategiak onartzen dira!')); // Errorea bota
                }
            }
        });
module.exports = router;
