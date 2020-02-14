# _Doctor Finder_

#### _Asynchrony and APIs Independent Project for Epicodus_, _14 Feb. 2020_

#### By _**Michelle Morin**_

## Description

_This application ..._

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| The webpage displays a list of doctors in the Portland, OR area that fit a search query describing a medical issue | "sore throat" |  |
| The webpage displays a list of doctors in the Portland, OR area that fit a search query of a name | "Mondragon" | "Christina Mondragon" |
| For each doctor in a query response, the webpage displays the first name, last name, address, phone number, website, and whether or not the doctor is accepting new patients | "Mondragon" |  |
| The webpage displays an error message when the API call results in an error (any message that is not a 200 OK) | API call results in 400-level response status | "There was an error locating doctors matching your search. Click here to try again!" |
| The webpage displays a notification stating that no doctors meet the user's search criteria when the query response does not include any doctors | API call returns empty data array | "Looks like no doctors match your search criteria. Click here to try a different search!" |

## Setup/Installation Requirements

#### Node install

###### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``$ brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``$ brew install node``

###### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

#### Install this application

_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/michelle-morin/doctor``
* ``$ cd doctor``
_Then, confirm that you have navigated to the doctor project directory (e.g., by entering the command ``pwd`` in Terminal)._

_Next, add a file named .env to project root directory using the command ``touch .env``_
* Visit the Better Doctor [website](https://developer.betterdoctor.com/) and click "Get a free API key". Fill out the form, then your own API key should be listed on the front page (e.g., “a2c356ibgh44…..”) or under My Account > Applications.
* On the first line of the .env file, add the following: API_KEY = {replace this text and curly braces with your own API key for the Better Doctor API}

_Next, install npm at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ npm run start``

_To view/edit the source code of this application, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code on macOS, enter the command "code ." in Terminal)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Better Doctor API_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Michelle Morin_**