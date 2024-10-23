import 'dotenv/config'
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    DB_HOST: string;
    MONGO_INITDB_ROOT_USERNAME: string;
    MONGO_INITDB_ROOT_PASSWORD: string;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    DB_HOST: joi.string().required(),
    MONGO_INITDB_ROOT_USERNAME: joi.string().required(),
    MONGO_INITDB_ROOT_PASSWORD: joi.string().required()
}).unknown(true);

const {error, value} = envsSchema.validate(process.env);
if (error) throw new Error(`Config validation error: ${error.message}`)

const envVars: EnvVars = value

export const envs = {
    port: envVars.PORT,
    db_host: envVars.DB_HOST,
    mongo_user: envVars.MONGO_INITDB_ROOT_USERNAME,
    mongo_pass: envVars.MONGO_INITDB_ROOT_PASSWORD
}