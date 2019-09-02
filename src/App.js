import Express from 'express';
import ExpressGraphQL from 'express-graphql';
import BodyParser from 'body-parser';

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
            },
            get isProduction() {
                return process.env.NODE_ENV === 'production' || true
            }
        }
    }

    /**
     *
     */
    run() {
        this.express.use('/graphql', ExpressGraphQL({
            schema: schema,
            graphiql: !this.configs.isProduction,
        }));

        this.express.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".");
        });
    }

}