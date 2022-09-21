function checkArmStrong(num){

    let rem, p=0,temp;
    temp=num;
    console.log(`${num} and ${temp}`)

    while(num>0){
        rem=num%10;
        p+=(rem)*(rem)*(rem);
        num=parseInt(num/10);
    }
    console.log(`${p}`)
    if(p===num){
        console.log(`${num} is Armstrong number`);
    }
    else{
        console.log(`${num} is not Armstrong number`);
    }
}
checkArmStrong(153);