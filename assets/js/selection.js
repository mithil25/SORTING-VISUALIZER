async function selection_sort(){
    let min;
    for(let i=0;i<size;i++){
        min=i;
        div[i].style.backgroundColor='red';
        for(let j=i+1;j<size;j++){
            if(div_height[j]<div_height[min]){
                min=j;
            }
        }
        div[min].style.backgroundColor='orange';
        await new Promise(resolve=>{setTimeout(()=>{resolve();},delay)});
        await swap(div[min],div[i]);
        await new Promise(resolve=>{setTimeout(()=>{resolve();},delay/2)});
        let temp=div_height[i];
        div_height[i]=div_height[min];
        div_height[min]=temp;
        div[min].style.backgroundColor='yellow';
        div[i].style.backgroundColor='green';     
    }
}