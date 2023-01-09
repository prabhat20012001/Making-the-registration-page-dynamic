// console.log('Person One Shows The Tickets')
// console.log('Person Two Shows The Tickets')
// const promisesWifeBringingTickets=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Tickets')

//     },2000)
// })
// const getpopcorn=promisesWifeBringingTickets.then((t)=>{
//     console.log('Wife:I have tics')
//     console.log('Husband:We should go in')
//     console.log('wife: no iam Hungry')
//     return new Promise((resolve,reject)=> resolve(`${t} popcorn`))
// })
// const getButter=getpopcorn.then((t)=>{
//     console.log('Husband:I got some Popcorn')
//     console.log('Husband: we should go in')
//     console.log('Wife:I need Butter')
//     return new Promise((resolve,reject)=> resolve(`${t} butter`))
// })
// const getcoldDrinks=getButter.then((t)=>{

//     console.log('Wife: I want coldDrink')
//     console.log('Husband: ok i will buy for you')
//     console.log('Husband:This is your coldDrink Honey')
//     console.log('wIFE: Ohh Thank You')
//     return new Promise((resolve,reject)=>resolve(`${t}coldDrink`))
    

// })
// getcoldDrinks.then((t)=> console.log(t))
// console.log('Person three Shows The Tickets')
// console.log('Person five Shows The Tickets')

// console.log('Person One Shows The Tickets')
// console.log('Person Two Shows The Tickets')







// const preMovie=async()=> {
//     const promisesWifeBringingTickets=new Promise((resolve,reject)=>resolve(`ticket`))
//     setTimeout(()=>{

//     },2000)
//     const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`))
//     const getButter=new Promise((resolve,reject)=>resolve(`butter`))
//     const getColdDrinks= new Promise((resolve,reject)=>resolve(`coldDrink`))
//     let Tickets= await promisesWifeBringingTickets

//     console.log(`Wife:I have ${Tickets}`)
//     console.log('Husband:We should go in')
//     console.log('wife: no iam Hungry')
    
//     let popcorn= await getpopcorn
//     console.log(`Husband:I got some ${popcorn}`)
//     console.log('Husband: we should go in')
//     console.log('Wife:I need Butter')

//     let butter= await getButter
//     console.log(`Husband: i got some ${butter} on popcorn`)
//     console.log('Husband:anything Else Darling')
//     console.log('Wife: We are getting late')
//     console.log('Husband:Thankyou for the reminder')

//     let coldDrink= await getColdDrinks
//     console.log('Wife: I want coldDrink')
//     console.log('Husband: ok i will buy for you')
//     console.log('Husband:This is your coldDrink Honey')
//     console.log('wIFE: Ohh Thank You')
//     return Tickets
// }
// preMovie().then((m)=>console.log(`person3: shows ${m}`))




// console.log('Person One Shows The Tickets')
// console.log('Person Two Shows The Tickets')
// const preMovie= async()=>{
//     const promisesWifeBringingTickets=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve('ticket'),3000)
//     })
//     const getpopcorn= new Promise((resolve,reject)=>resolve(`Popcorn`))
//     const getButter= new Promise((resolve,reject)=>resolve(`Butter`))
//     const getCandy= new Promise((resolve,reject)=>resolve(`Candy`))
//     const getCoke= new Promise((resolve,reject)=>resolve(`coke`))

//     let ticket= await promisesWifeBringingTickets

//     let[Popcorn,Butter,Candy,coke] = await Promise.all([getpopcorn,getButter,getCandy,getCoke])
//     console.log(`${Popcorn},${Butter},${Candy},${coke}`)
//     return ticket
// }
// preMovie().then((m)=>console.log(`person3:shows${m}`))

// console.log('Person One Shows The Tickets')
// console.log('Person Two Shows The Tickets')


// console.log('Person One Shows The Tickets')
// console.log('Person Two Shows The Tickets')
// const preMovie= async()=>{
//     const promisesWifeBringingTickets=new Promise((resolve,reject)=>{
//         setTimeout(()=>reject('ticket'),3000)
//     })
//     let ticket
//     try{
//         ticket= await promisesWifeBringingTickets
//     }catch(e){
//         ticket= 'Sad Face'
//     }
//     return ticket
// }
// preMovie().then((m)=>console.log(`person3:shows${m}`))
