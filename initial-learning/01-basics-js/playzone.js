// understanding async function
//setTimeout is inbuilt function. It has two attributes, first is action and second is delaying taking that acction

console.log('============understanding async with calback============');
const fetchData = callback => { // callback method
    setTimeout(() => {
        callback('done');
    },1000);
}

setTimeout(() => {
    console.log('Timer is done ! displayed after delay of 2 secs');
    fetchData(text => {
        console.log(text);
    });
},2000);                    // this is async code

console.log('this is sync code');

// understanding promises
const fetchData1 = () => { // promise method
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, 1500);
    });
    return promise;
}
setTimeout(() => {
    console.log(''),
    console.log('============understanding async with promises============');
    console.log('Timer is done ! displayed after delay of 2 secs');
    fetchData1()
      .then(text => {
        console.log(text);
        return fetchData1();
    })
     .then(text2 => {
        console.log(text2);
        return fetchData1();
     });
},2000); 
