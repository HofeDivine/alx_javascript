const request =require('request')
 
function getStatus(url){
    request.get(url,(error,response)=>{
    if (error) {
        console.error('Error:', error);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});

}
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node script.js <URL>');
    process.exit(1);
}
const url = args[0];
getStatus(url);