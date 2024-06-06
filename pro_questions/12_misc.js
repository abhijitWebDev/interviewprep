const myPromise = new Promise((resolve, reject) => {
    resolve("Promise Resolved");
})

console.log("111, Start");
setTimeout(() => { console.log("555, function above timeout"); }, 0);

async function exec() {
    console.log("222, First");
    console.log("333, Me Before Timeout");
    myPromise.then((response) => console.log('444',response));
    const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes");
    const data = await response.json();
    console.log('777',data.data[0]);
    setTimeout(() => { console.log("888 , Await After Timeout"); }, 0);
}
   



setTimeout(() => { console.log("666, function Below timeout"); }, 0);
exec();

console.log("444, End")