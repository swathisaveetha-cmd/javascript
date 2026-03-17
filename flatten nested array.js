function array(str){
    let str1=str.flat(Infinity);
    return str1;
}

let str=[1,[2,3],[4,[5]]];

console.log(array(str));
