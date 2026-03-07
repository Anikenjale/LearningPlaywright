
//Iterate - Go from one to another

let tests=["login","checkout","search"];

for (let i=0;i<tests.length;i++)
{
    console.log(tests[i]);
}

console.log("=====================================================================================")

//for ....of (cleanest value)
for(let test of tests){
    console.log(test);
}

console.log("=====================================================================================")

//forEach (no retuen value)
tests.forEach((test,index)=>{
    console.log(`${index}:${test}`);
})

console.log("=====================================================================================")


