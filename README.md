# png2ascii

png2ascii is a command line tool written in Node.js that converts PNG files into ASCII art.

## Installation

In order to use this tool, you must first install the required npm packages by running the following command:

`npm install`

## Usage

To convert a PNG file to ASCII art, run the following command in your terminal:

`node png2ascii.js [--invert] --infile filename.png`

Replace `filename.png` with the name of the PNG file you wish to convert.

You can also add the optional `--invert` flag to invert the colors of the image.

## Example

An example PNG file is provided in the repo, named `guy-fawkes.png`. To convert this file to ASCII art with inverted colors, run the following command:

`node png2ascii.js --invert --infile guy-fawkes.png`

If you want to save the output to a file you can pipe the result into that file:

`node png2ascii.js --infile guy-fawkes.png --invert > guy-fawkes.ascii`
