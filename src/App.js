import Express from 'express';
import BodyParse from 'body-parser';

/**
 *
 */
export default class App {

    /**
     *
     */
    constructor() {
        this.express = Express();

        this.configs = {
            get port() {
                return process.env.PORT || 4000
            }
        }
    }

    /**
     *
     */
    run() {
        this.express.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".");
        });
    }

}