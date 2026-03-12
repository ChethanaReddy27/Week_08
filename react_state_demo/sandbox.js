function add(...a){
   return a.reduce((acc, x) => acc + x, 0)
}
console.log(add(1,2))
console.log(add(1,2,3,4,5))