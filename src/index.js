import server from './app'; './app';
import port from './port';
import '@babel/polyfill';

async function main(){
    await server.listen(port,() => {
        console.log(`Estoy sirviendo en el puerto port ` + port);
    });
}
main();