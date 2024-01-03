console.log('person1 :shows ticket');
console.log('person2 :shows ticket');

const preMovie= async()=>{
    const wifeBringTickets=new Promise((res,rej)=>{
        setTimeout(()=>res('ticket'),3000);
    })
    const getPopcorn= new Promise((res,rej)=> res('popcorn'));
    const getbutter=new Promise((res,rej)=>res('butter'));
    const getColdDrinks=new Promise((res,rej)=>res('Cold drinks'));

    let tic=await wifeBringTickets;

    console.log(`wife:I have the ${tic}`);
    console.log("Husband: We should go in");
    console.log("wife: No I am hungry");

    let popcorn=await  getPopcorn;
    console.log(`Husband: I got some ${popcorn}`);
    console.log("Husband: We should go in");
    console.log("wife: No I need butter on my popcorn");

    let butter=await getbutter;

    console.log(`Husband: I got some ${butter} on your popcorn`);
    console.log("Husband: We should go in");
    console.log("wife: No I am thirsty too");

    let drink=await getColdDrinks;

    console.log(`Husband: I got ${drink} for you`);
    console.log("Husband: We should go in");
    console.log("wife: Ok lets go we are getting late");

    return tic;

}
preMovie().then((m)=> console.log(`person3 :shows ${m}`));


console.log('person4 :shows ticket');
console.log('person5 :shows ticket');
