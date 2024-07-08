import imageSize from 'image-size'
import * as fs from "fs"
import * as path from "path"

const directoryPath = path.join("public","images","galeria/")
const publicPath = path.join("images","galeria/")
let imagesSizes = []
fs.readdir(directoryPath, function (err, files) {
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file,index) {
      const data = imageSize(directoryPath+file)
      const width = data.width
      const height = data.height
      const filename = file.split(".")[0]
      imagesSizes[index]={
        jpgSrc:publicPath+file,
        webpSrc:directoryPath+filename+".webp",
        width:width,
        height:height,
        description:`Una imagen de ${filename}`
        }
        
      }) 
      fs.writeFile("./src/data/galeria.json",JSON.stringify(imagesSizes),(err)=>{
        if(err) return console.log(err)
        console.log("The file was saved")
      })
  });


