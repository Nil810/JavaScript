// Simple Bmi calculator
const height = [1.70, 1.65, 1.80, 1.60, 1.75];
const weight = [30, 55, 90, 102, 65];

/* Using these 5 users find the BMI */
/* Update your code below this line */
for(let i=0;i<5;i++)
    {
        const BMI =weight[i]/(height[i]*height[i]);

if(BMI<18.5)
{
    console.log(BMI.toFixed(2),"Underweight \n");
}
else if(BMI>=18.5 && BMI<=24.9)
{
    console.log(BMI.toFixed(2),"Normal Weight\n");
}
else if(BMI>=25 && BMI<=29.9)
{
    console.log(BMI.toFixed(2),"OverWeight\n");
}
else
{
    console.log(BMI.toFixed(2),"Obese");
}
}
