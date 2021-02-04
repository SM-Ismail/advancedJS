// conditions false- true

///falsy
false
0
""
null
undefined
NaN

///truthy
true
'0'
" "
[]
{}

let nname = 0;
if(nname || nname == 0){
    console.log('condition is true');
}else{
    console.log('condition is false');
}

