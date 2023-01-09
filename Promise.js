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
function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                let deleteElement=posts.pop()
                resolve(deleteElement)
            }else{
                reject('Array is empty')

            }
            
        },1000)
    })

}


createPost({Title:'Post Three',Body:'This is post three'})
.then(()=>{
    Postfour({Title:'Post 4',Body:'This is post 4'})
    .then(()=>{
        deletePost().then((deleteElement)=>{
            console.log(deleteElement)
            getPosts()
            deletePost().then(()=>{
                getPosts()
                deletePost().then(()=>{
                    getPosts()
                    deletePost().then(()=>{
                        getPosts()
                        deletePost().then(()=>{})
                        .catch((err)=>{
                            console.log('Inside the block',err)
                        })
                    })
                }).catch(err=>console.log(err))
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
.catch(err=>console.log(err))
})

    




const data=[
    {Title:'Post One',Body:'This is post one',createdOn:new Date().getTime()},
    {Title:'Post Two',Body:'This is post Two',createdOn:new Date().getTime()}
  ]
  let timeid=0
  function getPosts(){
    clearInterval(timeid)
    timeid=setInterval(() =>{
      let output=''
      data.forEach((post,index) => {
        output+=`<li> ${post.Title}-last Update ${(new Date().getTime()-post.createdOn)/1000} second ago</li>`
      });
      document.body.innerHTML=output
    },1000)
  }
  function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let a=posts.push({...post,createdOn:new Date().getTime()})
            const error=false
            if (!error){
                resolve(a)
            }else{
                reject()
            }
          },4000)
        
    })
   
  }

  function create4thPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let b=posts.push({...post,createdOn:new Date().getTime()})
            const error=false
            if (!error){
              resolve(b)
            }else{
              reject
            }
          },8000)
        
    })
  
  }
  
  
  function lastEditinASecond(post){
    return new Promise((resolve, reject) => {
        clearInterval(timeid)
        timeid=setInterval(() =>{
          let c=posts.push({...post,UpdateON:new Date().getTime()-post.createdOn/1000})
          const error=false
          if (!error){
            resolve(c)
          }else{
            reject
          }
        },6000)
        
    })
   
  }  
createPost({Title:'Post Three',Body:'This is post three'})
.then((msg)=>{
    console.log(msg)
    create4thPost({Title:'Post Forth',Body:'This is post forth'})
    .then((msg1)=>{
        console.log(msg1)
        lastEditinASecond({Title:'Post Forth',Body:'This is updated post forth'})
        .then((msg2)=>{
            console.log(msg2)
            getPosts()
            .then(()=>{

            })
        })
    })
})
