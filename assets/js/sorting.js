var div_height = []
var div = []
var max_heigth=38;
var size=20;
var delay=200;
const newArrayBtn=document.querySelector('#newBtn');
const bars=document.querySelector('#bars');
const sizeRange=document.querySelector('#sizeRange');
const bubbleBtn=document.querySelector('#bubbleBtn');
const selectionBtn=document.querySelector('#selectBtn');
const insertionBtn=document.querySelector('#insertionBtn');
const mergeBtn=document.querySelector('#mergeBtn');
const quickBtn=document.querySelector('#quickBtn');
sizeRange.addEventListener('input',function(e){
    removerBars(size);
    size=parseInt(e.target.value);
    newBars(size);
    
});
const delayTime=document.querySelector('#timeDelay');
delayTime.addEventListener('input',function(e){
    delay=parseInt(e.target.value);
})
const removerBars=(sz)=>{
    div_height.splice(0, div_height.length);
    for(let i=0;i<size;i++){
        div[i].remove();
    }
}
const newBars=(sz=20)=>{
    for (let i = 0; i < size; i++) {
        div_height[i]=Math.floor(Math.random()*max_heigth+1);
        let newDiv=document.createElement('DIV');
        newDiv.style.width= 2 - size / 100 + "rem";
        newDiv.style.height = div_height[i]+2+ "rem";
        newDiv.innerHTML=`<p>${div_height[i]}</p>`
        div[i]=newDiv;
        bars.appendChild(div[i]);
    }

}
const swap= async (el1, el2)=>{
        const style1 = window.getComputedStyle(el1);
        const style2 = window.getComputedStyle(el2);
    
    
        const transform1 = style1.getPropertyValue("height");
        const transform2 = style2.getPropertyValue("height");
    
        
        el1.style.height = transform2;
        el2.style.height = transform1
        const temp=el1.innerHTML;
        el1.innerHTML=el2.innerHTML;
        el2.innerHTML=temp;
        await new Promise(resolve=>{setTimeout(()=>{resolve();},100)});
}
newArrayBtn.addEventListener('click',()=>{
    removerBars(size);
    newBars(size);
});

bubbleBtn.addEventListener('click',async ()=>{
    bubbleBtn.classList.toggle('btn-primary');
    bubbleBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=true;
    selectionBtn.disabled=true;
    bubbleBtn.disabled=true;
    insertionBtn.disabled=true;
    sizeRange.disabled=true;
    mergeBtn.disabled=true;
    quickBtn.disabled=true;
    await bubble_sort();
    bubbleBtn.classList.toggle('btn-primary');
    bubbleBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=false;
    selectionBtn.disabled=false;
    insertionBtn.disabled=false;
    sizeRange.disabled=false;
    bubbleBtn.disabled=false;
    mergeBtn.disabled=false;
    quickBtn.disabled=false;
    
})
selectionBtn.addEventListener('click',async ()=>{
    selectionBtn.classList.toggle('btn-primary');
    selectionBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=true;
    selectionBtn.disabled=true;
    insertionBtn.disabled=true;
    bubbleBtn.disabled=true;
    sizeRange.disabled=true;
    quickBtn.disabled=true;
    mergeBtn.disabled=true;
    await selection_sort();
    selectionBtn.classList.toggle('btn-primary');
    selectionBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=false;
    selectionBtn.disabled=false;
    insertionBtn.disabled=false;
    sizeRange.disabled=false;
    bubbleBtn.disabled=false;
    quickBtn.disabled=false;
    mergeBtn.disabled=false;
});
insertionBtn.addEventListener('click',async ()=>{
    insertionBtn.classList.toggle('btn-primary');
    insertionBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=true;
    selectionBtn.disabled=true;
    insertionBtn.disabled=true;
    bubbleBtn.disabled=true;
    sizeRange.disabled=true;
    quickBtn.disabled=true;
    mergeBtn.disabled=true;
    await insertion_sort();
    insertionBtn.classList.toggle('btn-primary');
    insertionBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=false;
    selectionBtn.disabled=false;
    insertionBtn.disabled=false;
    sizeRange.disabled=false;
    bubbleBtn.disabled=false;
    quickBtn.disabled=false;
    mergeBtn.disabled=false;    

});
mergeBtn.addEventListener('click',async ()=>{
    mergeBtn.classList.toggle('btn-primary');
    mergeBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=true;
    selectionBtn.disabled=true;
    insertionBtn.disabled=true;
    bubbleBtn.disabled=true;
    sizeRange.disabled=true;
    quickBtn.disabled=true;
    mergeBtn.disabled=true;
    await merge_sort(0,size-1);
    mergeBtn.classList.toggle('btn-primary');
    mergeBtn.classList.toggle('btn-outline-danger');
    mergeBtn.disabled=false;
    newArrayBtn.disabled=false;
    selectionBtn.disabled=false;
    insertionBtn.disabled=false;
    sizeRange.disabled=false;
    quickBtn.disabled=false;
    bubbleBtn.disabled=false;
});
quickBtn.addEventListener('click',async ()=>{
    quickBtn.classList.toggle('btn-primary');
    quickBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=true;
    selectionBtn.disabled=true;
    insertionBtn.disabled=true;
    mergeBtn.disabled=true;
    bubbleBtn.disabled=true;
    sizeRange.disabled=true;
    quickBtn.disabled=true;
    await quick(0,size-1);
    quickBtn.classList.toggle('btn-primary');
    quickBtn.classList.toggle('btn-outline-danger');
    newArrayBtn.disabled=false;
    selectionBtn.disabled=false;
    insertionBtn.disabled=false;
    mergeBtn.disabled=false;
    sizeRange.disabled=false;
    bubbleBtn.disabled=false;
    quickBtn.disabled=false;
});
newBars(size);
