# ReactNodePhoneCatalogue

ReactNodePhoneCatalogue is a single web application coded in React JS.
It shows a list of phones loaded from the backend via a REST API coded in NodeJS.

Once a phone is selected, it renders a component with several details of the phone.

The state is managed with Redux.

The app has been dockerized.

Unit tests for both backend and frontend code have been created.

## Run the app

1. Clone the repo

        git clone https://github.com/oscarsr96/ReactNodePhoneCatalogue
    
        cd ReactNodePhoneCatalogue
    
2. Go to "backend" folder and execute:

        yarn start
    
3. In the browser, go to:

        localhost:3000
    
## Run backend tests

In the "backend" folder", execute the command:

    yarn test
    
## Run frontend tests

In the "phonecatalogue" folder, execute the commands:

    yarn install

    yarn test
    
## Launch the Docker compose

In the "backend" folder, execute:

    docker-compose build
    
    docker-compose up
