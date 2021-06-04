async function partition(low,high){
    let pivot=high;
    let j=low-1,temp;
    div[pivot].style.backgroundColor='rgb(230,120,120,0.9)';
    for(let i=low;i<high;i++)
    {
        div[i].style.backgroundColor='red';
        if(div_height[i]<div_height[pivot]){
            j++;
            temp=div_height[i];
            div_height[i]=div_height[j];
            div_height[j]=temp;
            div[j].style.backgroundColor='orange';
            await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
            await swap(div[i],div[j]);    
            div[j].style.backgroundColor='yellow';
        }
        await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
        div[i].style.backgroundColor='yellow';
        
    }
    div[j+1].style.backgroundColor='green';
    div[pivot].style.backgroundColor='orange';
    await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
    temp=div_height[j+1];
    div_height[j+1]=div_height[pivot];
    div_height[pivot]=temp;
    await swap(div[pivot],div[j+1]);
    div[pivot].style.backgroundColor='yellow';
    await new Promise(resolve=>setTimeout(()=>(resolve()),delay));
    div[j+1].style.backgroundColor='yellow';
    return j+1;
}

async function quick_sort(low,high){
    if(low<high){
        let pivot=await partition(low,high);
        await quick_sort(low,pivot-1);
        await quick_sort(pivot+1,high);
    }
}
async function quick(low,high){
    await quick_sort(low,high);
    for(let i=0;i<=high;i++){
        await new Promise(resolve=>setTimeout(()=>(resolve()),delay/10));
        div[i].style.backgroundColor='#11e03f';
    }

}
