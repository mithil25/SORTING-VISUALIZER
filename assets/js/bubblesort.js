async function bubble_sort(){
    for(let i=0;i<size;i++){
        for(let j=i+1;j<size;j++){
            if(div_height[j]<div_height[i]){
                let temp=div_height[i];
                div_height[i]=div_height[j];
                div_height[j]=temp;
                div[i].style.backgroundColor='green';
                div[j].style.backgroundColor='red'; 
                await swap(div[i],div[j]);
                await new Promise(resolve=>{setTimeout(()=>{resolve();},delay)});
            }
            div[j].style.backgroundColor='yellow'; 
        }
        div[i].style.backgroundColor='green';
    }
}
