const myFunc = (input) => {
    let myStr = input.split('')

    let longest = []
    let current = []
    
    for(let i=0; i < myStr.length; i++) {
        current.push(myStr[i])
       
        for(let j=i+1; j < myStr.length; j++) {
            if(current.includes(myStr[j])) {
                current.push(myStr[j])
            }
        }

        if(current.length > longest.length) {
            longest = current
        }
        current = []
        
    }

    console.log(longest)

}


// myFunc('aanyyeeeddk')
// myFunc('btyyrjp')  