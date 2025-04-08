<!-- ABOUT THE PROJECT -->
## BLANKHOUSE APPLICATION

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* powershell (open as administrator)
* ```sh
  set-executionpolicy remotesigned
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sainip1atwit/Blankhouse2.git
   ```
2. Create your own PostgreSQL Database
  The database is ran locally and will only be able to complete queries if you install pgadmin 4 and create your own database
   
3. Install NPM packages
   ```sh
   npm install multer pg bcrypt jsonwebtoken express
   ```
4. Start the server.js
   ```js
   cd src/services/
   node server.js
   ```
5. Run Expo on your local IP Address
   ```sh
   npx expo
   npx expo start -c
