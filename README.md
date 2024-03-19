# I Have No Shelf Control Book Review Database

## Table of Contents

1. Description
2. Badges
3. Visuals
4. Usage and Installation
5. Support
6. Contributing 
7. Authors and acknowledgment
8. License
9. Project status

## 1. Description

Our application provides a platform for users to review and discuss books. Features include:
- The ability to create an account to join discussions;
- Users can favourite books as a reference of what to read in the future;
- Reviews can be left by users to get a community rating on books.


## 2. Badges

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) 

## 3. Visuals

```diff
- Add screenshots or videos here
```

## 4. Usage and Installation

Clone the Git repo and open in a code editor such as Visual Studio Code. This app runs the inquirer interface through node. 

Installation instructions:

- NODE: npm install 
- Create an .env file and add env variables:

            copy paste this into the .env file:

                DB_NAME='shelf_controll_db'
                DB_USER='root'
                DB_PASSWORD=' '                            <---- enter your mysql password in the quotes
                SENDER_EMAIL="shelfcontroll@outlook.com"
                SENDER_PASSWORD="$h3ll*fc0ntro1l"

- MySQL: mysql -u root -p
    - MySql database: SOURCE db/schema.sql
    - Exit;
    - npm run seed
- Add     "watch": "nodemon server.js"   to package-json, under "scripts"
- APP: 
    * npm run watch [for nodemon server]  <----- this automatically updates server every time you make a change
    * npm start [for non-updating regular server]
- Open [http://localhost:3001](http://localhost:3001/) in browser

Link to GitHub Repo:

[https://github.com/BenRodwell/I-Have-No-Shelf-Control](https://github.com/BenRodwell/I-Have-No-Shelf-Control)

Linked to deployed web app:
[https://project27-9e19fd8d284f.herokuapp.com/](https://project27-9e19fd8d284f.herokuapp.com/)

## 5. Support

For support, users can contact the contributors through the github repo.

## 6. Contributing

Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". 
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/NewFeature)
3.	Commit your Changes (git commit -m 'Add some NewFeature')
4.	Push to the Branch (git push origin feature/NewFeature)
5.	Open a Pull Request

## 7. Authors and acknowledgment

This respository was made in collaboration with:
* Troy [GitHub](https://github.com/sifzerda)
* Jack [GitHub](https://github.com/JLP-55)
* Ben [GitHub](https://github.com/BenRodwell)
* Henry [GitHub](https://github.com/hr-virieux)

The authors acknowledge and credit those who have helped contribute to this project, including:
*	https://git.bootcampcontent.com/Monash-University/MONU-VIRT-FSF-PT-11-2023-U-LOLC
*	Chee Ho Tai [GitHub](https://github.com/cupacheeno)
*	Pranita Shrestha [GitHub](https://github.com/shrestha-pranita)

Book cover images referenced from:
*	[goodreads](https://www.goodreads.com)

## 8. License

Distributed under the MIT License. See LICENSE.txt for more information.

## 9. Project status

This project is completed.
