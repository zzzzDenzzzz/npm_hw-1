art = require("ascii-art");
Canvas = require("canvas");
const pathToPictures = [
  "./img/animal_muppet.jpg",
  "./img/grendel.jpg",
  "./img/metropolis.jpg",
];

function printImage(path, _alphabet) {
  let image = new art.Image({
    filepath: path,
    alphabet: _alphabet,
  });

  image.write(function (err, rendered) {
    console.log(rendered);
  });
}

for (const path of pathToPictures) {
  printImage(path, "variant4");
}
