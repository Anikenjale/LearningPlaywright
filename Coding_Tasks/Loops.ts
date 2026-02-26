// For Loop

// 1️⃣ Print "Hello" 5 times

// 2️⃣  Print numbers from 1 to 10

// 3️⃣ Print even numbers from 1 to 20

// 4️⃣ Print the sum of first 10 natural numbers

// 5️⃣ Print the multiplication table of 5

function Forloop1()
{
    for (let i=0;i<5;i++)
    {
        console.log("Hello");
    }

    for (let a=1;a<=10;a++)
    {
        console.log(a);
    }

    for (let e=1;e<=20;e++)
    {
        if(e%2===0)
        {
            console.log(e);
        }
        
    }
    let sum:number=0;
    for (let n:number=0;n<=10;n++)
    {
        if(n>0 && Number.isInteger(n))
        {
            sum +=n
        }
    }
    console.log(sum);

    for(let b=1;b<=10;b++)
    {
        console.log(b*5);
    }
}

Forloop1();

// While Loop

// 1️⃣ Print "Playwright" 5 times

// 2️⃣ Print numbers from 1 to 10

// 3️⃣ Print even numbers from 1 to 20

// 4️⃣ Calculate sum of first 10 natural numbers

// 5️⃣ Print the multiplication table of 7
function whileloop()
{
    let i:number=0;
    while(i<5)
    {
        console.log("hello");
        i++;
    }

    let num:number=1;
    while(num<=10)
    {
        console.log(num);
        num++;
    }
    let even:number=1;
    while(even<=20){
        if(even%2===0)
        {
            console.log(even);
        }
        even++
    }

    let sum:number=0;
    let n:number=0;
    while(n<=10)
    {
        if(n>0 && Number.isInteger(n))
        {
            sum +=n;
        }
        n++
    }
    console.log(sum);

    let t:number=1;
    while(t<=10)
    {
        console.log(t*7);
        t++;
    }
}

whileloop()