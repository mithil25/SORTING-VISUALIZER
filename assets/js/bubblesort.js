async function bubble_sort(){
    for(let i=0;i<size;i++){
        for(let j=0;j<size-i-1;j++){
            if(div_height[j]>div_height[j+1]){
                let temp=div_height[j+1];
                div_height[j+1]=div_height[j];
                div_height[j]=temp;
                div[j+1].style.backgroundColor='orange';
                div[j].style.backgroundColor='red'; 
                await new Promise(resolve=>{setTimeout(()=>{resolve();},delay/2)});
                await swap(div[j+1],div[j]);
                await new Promise(resolve=>{setTimeout(()=>{resolve();},delay/2)});
            }
            div[j].style.backgroundColor='yellow'; 
        }
        div[size-i-1].style.backgroundColor='#1aca1a';
    }
}
