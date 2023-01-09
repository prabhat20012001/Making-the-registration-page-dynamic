
const posts=[
    {Title:'Post One',Body:'This is post one'},
    {Title:'Post Two',Body:'This is post Two'}
]
function getPosts(){
    setInterval(() =>{
        let output=''
        posts.forEach((post,index) => {
        output+=`<li> ${post.Title}</li>`
        });
        document.body.innerHTML=output
    },1000)
    }
function createPost(post){

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post) 
        const error= false
        if(!error){
            resolve()
        } else{
            reject('Error: Something went wrong') ;
        }
    },2000);
})
}
function Postfour(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error= false
            if (!error){
                resolve()
            }else{
                reject('Error: Something Went Wrong')
            }
        })
    },3000)
}
function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                let deletedelement=posts.pop()
                resolve(deletedelement)
            }else{
                reject('Array is empty')
    
            }
                
        },1000)
    })
    
}

async function start(){
    const msg= await getPosts()
    console.log(msg)

    const msg2=await createPost({Title:'Post Three',Body:'This is post three'})
    console.log(msg2)
    const msg3=await Postfour({Title:'Post 4',Body:'This is post 4'})
    console.log(msg3)

    const msg4=await deletePost()
    console.log(msg4)
    
}
start()
