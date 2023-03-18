const fs = require("fs");
const PNG = require("pngjs").PNG;
const argv = require("minimist")(process.argv.slice(2));
const path = require("path");

let asciiScale =
  "$@B%8&WM#*oahkbdpqwZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

if (!argv.infile) {
  console.log(
    `usage: ${path.basename(process.argv[0])} ${path.basename(
      process.argv[1]
    )} [--invert] --infile filename.png`
  );
  return;
}

if (argv.invert) {
  asciiScale = asciiScale.split("").reverse().join("");
}

fs.createReadStream(argv.infile)
  .pipe(
    new PNG({
      filterType: 4,
    })
  )
  .on("parsed", function () {
    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        const avgColor = Math.round(
          (this.data[idx] + this.data[idx + 1] + this.data[idx + 2]) / 3
        );
        const asciiIndex = Math.floor(avgColor / (255 / asciiScale.length));
        const asciiChar = asciiScale[asciiIndex];
        row.push(asciiChar);
      }
      console.log(row.join(""));
    }
  });
