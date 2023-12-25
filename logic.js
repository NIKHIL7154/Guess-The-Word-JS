const words=["ELEPHANT",'DECIDE','PERSISTENT','OCEAN','CHILDREN','PROHIBITED','SLANG','EVENING','THE GATEWAY OF INDIA']

const textshow =document.querySelector('.blankdiv')
const alpha =document.querySelector('.alphas')
createbuttons()

var winstr=''

function updatewin(val){
    winstr=winstr.split(val).join('')
}

function enablekeys(wor){
    const val =document.querySelectorAll(".alphbt");
    val.forEach((i)=>{
        i.addEventListener('click' , (ele)=>{
            let value=ele.target.innerHTML
            if(wor.includes(value)){

                let idss=document.querySelectorAll('#h2id'+value);
                idss.forEach((i)=>{
                    i.innerHTML=value
                })
                updatewin(value)
                
                ele.target.remove()
                if(winstr==''){
                    alert('You won bacha')
                }
                
            }else{
                alert('Wrong input bhai')
                ele.target.remove()
            }
            
    })
});
}

function countchars(char,word){
    const re =new RegExp(char,'g');
    const count = word.match(re).length;
    return count
}

function createbuttons() {
    alpha.innerHTML=''
    letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(i=0;i<26;i++){
        hell=document.createElement('button')
        hell.className="alphbt";
        hell.id=('keys01'+letters[i])
        hell.innerHTML=letters[i]
        alpha.appendChild(hell)
    }
    
}


function restartgame(){
    let firstrem = 1
    let secondrem = 1
    
    textshow.innerHTML=''
    var selected=words[(Math.floor(Math.random() * words.length))]
    createbuttons()
    enablekeys(selected)
    winstr=selected.replace(/ /g,'')
    
    let a=(Math.floor(Math.random() * selected.length))
    let b=(Math.floor(Math.random() * selected.length))
    for(i of selected){
        if(i==' '){
            let hell=document.createElement('div')
            hell.className="spaceforblank";
            textshow.appendChild(hell)
        }else{
            hell=document.createElement('div')
            hell.className="blank";
            leth2=document.createElement('h2')
            leth2.id='h2id'+i
            if(i==selected[a]){
                leth2.innerHTML=i
                winstr=winstr.replace(i,'')
                if(firstrem==1){
                    document.getElementById('keys01'+i).remove()
                    firstrem+=1
                }
                

            }else if(i==selected[b]){
                winstr=winstr.replace(i,'')
                leth2.innerHTML=i
                if(secondrem==1){
                    document.getElementById('keys01'+i).remove()
                    secondrem+=1
                }
            }else{
                leth2.innerHTML=''
            }
            
            hrtag=document.createElement('hr')
            hell.appendChild(leth2)
            hell.appendChild(hrtag)
            textshow.appendChild(hell)
        }
    }
}
