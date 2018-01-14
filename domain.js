// const dns = require('dns');
// dns.lookup('www.javatpoint.com', (err, addresses, family) => {
//     console.log('addresses:', addresses);
//     console.log('family:', family);
// });

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    console.log(hostname, service);
    // Prints: localhost  
});

console.log(`Process Architecture: ${process.arch}`);
console.log(`Process PID: ${process.pid}`);
console.log(`Process Platform: ${process.platform}`);
console.log(`Process Version: ${process.version}`);

process.argv.forEach((value, index, array) => {
    console.log(`${index}: ${value}`);
})
console.log(`Current directory: ${process.cwd()}`);
console.log(`Uptime: ${process.uptime()}`);