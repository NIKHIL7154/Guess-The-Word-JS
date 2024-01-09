const words=["ELEPHANT",'DECIDE','PERSISTENT','OCEAN','CHILDREN','PROHIBITED','SLANG','EVENING','THE GATEWAY OF INDIA']

const textshow =document.querySelector('.blankdiv')
const alpha =document.querySelector('.alphas')
const livediv=document.querySelector('.livescontainer')

const winaud=document.getElementById('winaudio');
const failaud=document.getElementById('failaudio');
createbuttons()

var livecounter=5
var winstr=''
var hintcounter=2


function closethehint(){
    document.querySelector('.hintdiv').style.display='none'
}

function showthehint(){
    let a=(Math.floor(Math.random() * winstr.length))
    if(hintcounter>0){
        hintcounter=hintcounter-1
        let dialog=document.querySelector('.hintdiv')
        dialog.style.display='flex'
        document.getElementById('h3forhint').innerHTML=("Letter is : "+winstr[a])
        document.getElementById('h5forhintcount').innerHTML=('⚠️'+hintcounter+' Hints remaining⚠️')
    }else{
        alert('Sorry you have used all available hints.')
    }
    
}

function updatewin(val){
    winstr=winstr.split(val).join('')

}

function enablekeys(wor){
    const val =document.querySelectorAll(".alphbt");
    val.forEach((i)=>{
        i.addEventListener('click' , (ele)=>{
            let value=ele.target.innerHTML
            if(wor.includes(value)){
                winaud.play()
                let idss=document.querySelectorAll('#h2id'+value);
                idss.forEach((i)=>{
                    i.innerHTML=value
                })
                updatewin(value)

                ele.target.remove()
                if(winstr==''){
                    alert('You won bacha')
                    restartgame()
                }

            }else{
                failaud.play()
                const liveobj=document.getElementById('liveid'+livecounter);
                liveobj.classList.add('livesfadeaway')
                setTimeout(deletediv,700)
                ele.target.remove()


            }

        })

    });
}
function deletediv(){
    const liveobj=document.getElementById('liveid'+livecounter);
    liveobj.remove()
    livecounter=livecounter-1;
    failaud.pause()
    failaud.currentTime=0;
    if(livecounter==0){
        document.querySelector('.gameoverdiv').style.display='flex'
    }
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

function livesadder(){
    livediv.innerHTML=''
    let i=0
    for(i=0;i<5;i++){
        let live=document.createElement('div')
        live.className='lives'
        live.id='liveid'+(i+1)
        liveptag=document.createElement('p')
        liveptag.innerHTML='❤️'
        live.appendChild(liveptag)
        livediv.appendChild(live)

    }
    livecounter=5

}


function restartgame(){
    hintcounter=2
    livesadder()
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
                leth2.innerHTML='.'
            }
            hrtag=document.createElement('hr')
            hell.appendChild(leth2)
            hell.appendChild(hrtag)
            textshow.appendChild(hell)
        }
    }
}
function playagainfromGO(){
    let aa=document.querySelector('.gameoverdiv')
    aa.style.display='none'
    restartgame()
}
restartgame()
