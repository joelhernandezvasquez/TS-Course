

(()=>{


    const fullName = (firstName:string, ...args:string []) =>{
       return `${firstName} ${args.join('')}`
    }

    const superman = fullName('Clark','Joseph','Kent')

  console.log({superman})


}) ()