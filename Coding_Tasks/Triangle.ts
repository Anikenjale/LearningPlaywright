function Triangle(S1:number,S2:number,S3:number)
{
    if(S1===S2 && S1===S3 && S1===S3)
    {
        return "Triangle is equilateral "
    }
    else if(S1===S2 || S1===S3|| S2==S3)
    {
        return "Triangle is isosceles"
    }
    else
    {
        return " Triangle is scalene "
    }
}

console.log(Triangle(20,27,20));

function LeapYear(year:number)
{
    if(year%4===0 && year%400===0 || year%100!=0)
    {
        return "Leap Year";
    }
    else
    {
        return "Not Leap Year";
    }
}

console.log(LeapYear(1900));