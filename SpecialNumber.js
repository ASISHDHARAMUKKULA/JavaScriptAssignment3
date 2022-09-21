function specialNumber(num){

    let res=1,temp,sum=0;
    temp=num;
    while(num>0){
        num=num%10;
        for(i=2;i<=num;i++){
            res*=i;
        }
        sum=sum+res;
        console.log(sum)
        num=parseInt(num/10);
        console.log(num)
    }

    if(sum===num){
        console.log("Special Number");
    }
    else{
        console.log("Not a Special Number");
    }
}
specialNumber(145);