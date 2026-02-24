
function gradeCalculator(result:any)
{
   if(result>=90 && result<=100)
{
    return "Grade: A - Excellent";
}
else if(result>=80 && result <=89){
    return "Grade: B - Good";
}
else if(result>=70 && result <=79){
    return "Grade: C - Average";
}
else if(result>=60 && result<=69){
    return "Grade: B - Good";
}
else if(result>=0 && result <=0) 
{
     return "Grade: F - Fail";
}
else
{
    return "invalid result";
}
}

console.log(gradeCalculator("78"));


