console.log('person1 :shows ticket');
console.log('person2 :shows ticket');

const preMovie= async()=>{
    const wifeBringTickets=new Promise((res,rej)=>{
        setTimeout(()=>res('ticket'),3000);
    })
    const getPopcorn= new Promise((res,rej)=> res('popcorn'));
    const getcandy=new Promise((res,rej)=>res('candy'));
    const getColdDrinks=new Promise((res,rej)=>res('Cold drinks'));

    let tic=await wifeBringTickets;

    console.log(`wife:I have the ${tic}`);
    console.log("Husband: We should go in");
    console.log("wife: No I am hungry");

   let[popcorn,candy,drink]= await Promise.all([getPopcorn,getcandy,getColdDrinks])

    console.log(`Husband: I got ${[popcorn,candy,drink]} for you`);
    console.log("Husband: We should go in");
    console.log("wife: Ok lets go in");

    return tic;

}
preMovie().then((m)=> console.log(`person3 :shows ${m}`));


console.log('person4 :shows ticket');
console.log('person5 :shows ticket');
