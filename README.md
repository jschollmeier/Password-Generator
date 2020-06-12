 JavaScript: Password Generator

 An application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by the JavaScript code. It also features a clean and polished user interface is responsive, ensuring that it adapts to multiple screen sizes. 

 When the page is opened a box appears with a button underneath that says generate password.

 When the user clicks the button a prompt appears at the top of the screen asking how many characters the user wants the password to be.

 Once the length is input another prompt appears asking the user to select which type of characters the user wants in his password.

 It asks the user to enter the numbers corresponding to the type of characters they want 1. for lowercase 2. for uppercase 3. for numbers 4. for Special Characters 

 the user can enter any or all of the numbers
and then the javascript reads the string splits it into the seperate characters and then switches boolean values for each of the character types to true if that character was selected

All of the character types are stored in their individual strings and whichever types are selected are combined using the concat methods into one big string. 

then characters are selected randomly from this big string using math.random method and stored in another string which represents the random password 

a for loop is run for the total number of times that the user selected for their password length and a new random character is stored is stored in the random password string for each iteration

once the for loop is complete the completed random password string is printed to the generate password box 

the program can be run as many times in a row as the user wants and will generate a new random password each time.



