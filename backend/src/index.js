const app = require('./app');

async function main() {

    await app.listen(4000);
    console.log('servidor en puerto 4000');
}

main();