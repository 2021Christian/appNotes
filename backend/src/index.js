require('dotenv').config();

const app = require('./app');

async function main() {

    await app.listen(process.env.PORT || 3500);
    console.log('servidor en puerto', process.env.PORT);
}

main();