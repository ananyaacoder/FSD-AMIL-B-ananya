 const MyPromise= new Promise((resolve, reject)=>{
  let age= 16;
  if(age>=18)
  {
    resolve("Elligble for vote...")
  }
  else{
    reject("Not eligible for vote...")
  }
  })
//   console.log(MyPromise);
//   MyPromise.then((msg)=>console.log(msg))
           .catch((err)=>console.log(err));

           const resolvepromise = async()=>{
           try{ const msg= await 
            MyPromise
            console.log(msg);
           }
           catch(error){
            console.log(error);
           }
        }
           resolvepromise();
          
           