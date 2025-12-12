function getSearchProducts<T>(products: T[]):T{
    //do some database operations
    const myIndex = 3
    return products[0]
}

// generic arrow method
const getMoreSearchProducts = <T>(products:T[]):T =>{
    const myIndex = 4
    return products[myIndex]
}

// <T,> can also be used instead of <T>




export{}