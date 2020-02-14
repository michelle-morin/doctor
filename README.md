# _Doctor Finder_

#### _Asynchrony and APIs Independent Project for Epicodus_, _14 Feb. 2020_

#### By _**Michelle Morin**_

## Description

_This website allows a user to enter a medical issue (e.g., "headache", "diabetes", etc.) or a doctor's name and receive a list of Portland, OR area doctor(s) matching the search query. The website displays up to 25 matching doctors for either search (by name or medical issue)._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| The webpage displays a list of doctors in the Portland, OR area that fit a search query describing a medical issue | "sore throat" | list of doctors in Portland, OR area that treat sore throats |
| The webpage displays a list of doctors in the Portland, OR area that fit a search query of a name | "Sue" | list of doctors in Portland, OR area whose name includes the string "Sue" |
| For each doctor in a query response, the webpage displays the first name, last name, address, whether or not the doctor is accepting new patients, phone number, and website (if available)  | "Mondragon" | "Cristina Fe Mondragon", "Clinic address: 800 SW 13th Ave Portland, OR 97205" "Accepting new patients", "Phone Number: 5032210161", "Website: not available" |
| The webpage displays an error message when the API call results in an error (any message that is not a 200 OK) | API call results in 400-level response status | "There was an error retrieving search results. Click here to try again!" |
| The webpage displays a notification stating that no doctors meet the user's search criteria when the query response does not include any doctors | API call returns empty data array | "Unfortunately, there are no Portland, OR area doctors matching your search criteria. Click here to try a different search!" |

## Setup/Installation Requirements

### Node install

#### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``$ brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``$ brew install node``

#### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### Setup/install this application

_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/michelle-morin/doctor``
* ``$ cd doctor``

_Confirm that you have navigated to the doctor project directory (e.g., by entering the command_ ``pwd`` _in Terminal). Next, add a file named .env to project root directory (e.g., by entering the command_ ``touch .env`` _in Terminal)._

_Visit the BetterDoctor API [website](https://developer.betterdoctor.com/) and click "Get a free API key". Fill out the form, then your own API key (e.g., “a2c356ibgh44…..”) should be listed on the front page or under My Account > Applications._

_On the first line of the .env file, add the following:_
``API_KEY = {replace this text and curly braces with your own BetterDoctor API key}``

_Next, install node package manager (npm) at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ npm run start``

_To view/edit the source code of this application, open the contents of the doctor directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._

## Technologies Used
* _Git_
* _HTML_
* _CSS_
* _JavaScript_ 
* _jQuery_ 
* _npm_ 
* _Webpack_ 
* _[Better Doctor API](https://developer.betterdoctor.com)_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin_**