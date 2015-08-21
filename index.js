var environment = process.env.NODE_ENV;

console.log('[test] NODE_ENV: \n' + environment);

console.log('[test] process.stdout.write: ');
process.stdout.write('OK stdout\n')

console.log('[test] process.stderr.write: ')
process.stderr.write('OK stderr\n')

try {
  throw ('OK exception');
} catch (ex) {
  console.log('[test] exception: \n'+ex);
}

