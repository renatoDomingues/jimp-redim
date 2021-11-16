
//import
const Jimp = require('jimp')

//Para ler a foto
Jimp.read('casal.jpg', (err, image) => {
    
    image
        .cover(50, 100)
        //.resize(100, 100)
        //.resize(150,150)
        .greyscale()
        //.contrast(0.5)
        //.blur(10)
        .write('casal-50x100-greyscale.jpg')
})