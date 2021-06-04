async function setDiv(ele1, height)
{
    ele1.style.height=height+2+"rem";
    ele1.innerHTML=`<p>${height}</p>`;

}
 async function merge(low,mid,high){
    let L1,R1,L2,R2,k,n1,n2;
    L1=[];
    R1=[];
    L2=[];
    R2=[];
    n1=mid-low+1;
    n2=high-mid;
    for(let i=0;i<n1;i++)
    {
        L1[i]=div_height[low+i];
        div[low+i].style.backgroundColor='rgb(255, 192, 51)';
        div[low+i].innerHTML+='<small><b>L[]</b></small>';
        L2[i]=div[low+i];
    }
    await new Promise(resolve=>setTimeout(()=>(resolve()),delay));
    for(let j=0;j<n2;j++)
    {
        R1[j]=div_height[j+mid+1];
        R2[j]=div[j+mid+1];
        div[mid+j+1].style.backgroundColor='rgb(149, 51, 255)';
        div[mid+j+1].innerHTML+='<small><b>R[]</b></small>';
    }
    await new Promise(resolve=>setTimeout(()=>(resolve()),delay));
    k=low;
    while(L1.length && R1.length)
    {
        if(L1[0]<R1[0])
        {
            div_height[k]=L1.shift();
            if(L2[0].style.backgroundColor!=='rgb(24, 234, 20)')
                L2[0].style.backgroundColor='red';

            await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
            await setDiv(div[k],div_height[k]);
            L2.shift();

            div[k].style.backgroundColor='rgb(24, 234, 20)';
        }
        else
        {
            div_height[k]=R1.shift();
            if(R2[0].style.backgroundColor!=='rgb(24, 234, 20)')
                R2[0].style.backgroundColor='red';

            await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
            await setDiv(div[k],div_height[k],R2[0]);
            R2.shift();

            div[k].style.backgroundColor='rgb(24, 234, 20)';
        }
        k++;
    }
    while(L1.length){
        div_height[k]=L1.shift();
        if(L2[0].style.backgroundColor!=='rgb(24, 234, 20)')
            L2[0].style.backgroundColor='red';
        await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
        await setDiv(div[k],div_height[k]);
        L2.shift();
        div[k].style.backgroundColor='rgb(24, 234, 20)';
        k++;
    }
    while(R1.length){
        div_height[k]=R1.shift();
        if(R2[0].style.backgroundColor!=='rgb(24, 234, 20)')
            R2[0].style.backgroundColor='red';
        await new Promise(resolve=>setTimeout(()=>(resolve()),delay/2));
        await setDiv(div[k],div_height[k]);
        R2.shift();
        div[k].style.backgroundColor='rgb(24, 234, 20)';
        k++;
    }
}
async function merge_sort(low,high){
    if(low<high){
        let mid=parseInt(low+(high-low)/2);
        await merge_sort(low,mid);
        await merge_sort(mid+1,high);
        await merge(low,mid,high);
    }
}