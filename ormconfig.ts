export const dbConfig = {
    "type": "mysql",
    "host": "localhost",
    "port": "3306",
    "username": "root",
    "password": "",
    "database": "hris",
    "synchronize": false,
    "logging": true,
    "entities": [
        "src//*.entity.ts",
        "dist//*entity.ts"
    ]
}