Name: Seena Shafai
File: `parser.js`
IDE: Visual Studio Code

Succesfully retrieves data from the Ampify endpoint and sorts said data into their genres.

----------------------------------------------------------------------------------------------

Steps taken to produce solution:

1. Create https GET request. Required in-built 'https' module
2. Parse results of GET request, using in-built 'JSON' module
3. Iterate through each object in the pack: 
    • If genre has already been detected, add to its existing key in dictionary
    • If new genre detected, add to the genre array and create a new key/value pair in dictionary
4. Generate outputs as required by the provided README script

----------------------------------------------------------------------------------------------

How to run script: (assuming Node.JS is installed)

1. Navigate to directory containing `parser.js` file in the command line/terminal
2. Execute: `node parser.js`
3. The program runs, and the outputs are displayed in the console
