async function insertion_sort()
{
    let j,temp1,temp2;
    for(let i=1;i<size;i++)
    {
        j=i-1;
        div[i].style.backgroundColor='#ef4d55';
        await new Promise(resolve=>{setTimeout(()=>{resolve()},delay)});
        while(j>=0 && div_height[j+1]<div_height[j])
        {
            div[j].style.backgroundColor='#bd6921';
            temp1=div_height[j+1];
            div_height[j+1]=div_height[j];
            div_height[j]=temp1;
            await swap(div[j],div[j+1]);
            div[j+1].style.backgroundColor='yellow';
            j--;
            await new Promise(resolve=>{setTimeout(()=>{resolve()},delay)});
           
            for (let k = i; k >= 0; k--) {
                 div[k].style.backgroundColor ='yellow';
            }
        }
        div[j+1].style.backgroundColor='green';
        for (var k = i; k >= 0&&i==size-1; k--) {
            await new Promise(resolve=>{setTimeout(()=>{resolve()},delay/10)});
            div[k].style.backgroundColor ='#14d814';
       }

    }
}
