
 let pscore=document.querySelector('.playerpara');
 let cscore=document.querySelector('.computerpara');
 let round=document.querySelector('.roundpara');

 let playerhand=document.querySelector('.playerhand');
let computerhand=document.querySelector('.computerhand');
let gamepage=document.querySelector('.secondpage');
let winpage=document.querySelector('.thirdpage');
let losepage=document.querySelector('.fourthpage');
let tiepage=document.querySelector('.fifthpage');


gamepage.classList.add('fadein');
winpage.classList.add('fadeout');
losepage.classList.add('fadeout');
tiepage.classList.add('fadeout');





function select()
{
    
    
    let playerchoices=document.querySelectorAll('.buttons button')
    let buttonrock=document.querySelector('.rock');
    let buttonpaper=document.querySelector('.paper');
    let buttonscissors=document.querySelector('.scissors');
    let hands=document.querySelectorAll('.hands img');
    
    hands.forEach(hand=>{
        hand.addEventListener("animationend",function(){
            this.style.animation="";
        })
    })
    
    let Computeroptions=[buttonrock,buttonpaper,buttonscissors];
    
    
    playerchoices.forEach(option => {
        option.addEventListener("click",function(){
            let computerselection=Math.floor(Math.random()*3);
            let computerchoice=Computeroptions[computerselection];
           
            
            setTimeout(()=>{
                game(this,computerchoice,round);

            },2000);
            if(!gamedeclaration(round))
            {
                playerhand.style.animation="shakeplayer 2s ease";
               computerhand.style.animation="shakecomputer 2s ease";
            }
           

           
            
            
          
             
     })
    
});
 
}
   
function gamedeclaration(round)
{
   
    if(round.textContent>=10)
    {
        playerhand.classList.add('fadeout');
       if(pscore.textContent==cscore.textContent)
      {
        
        winpage.classList.add('fadeout');
        losepage.classList.add('fadeout');
        tiepage.classList.add('fadein');

      }
       else if(pscore.textContent>cscore.textContent)
      {
       
        winpage.classList.add('fadein');
        losepage.classList.add('fadeout');
        tiepage.classList.add('fadeout');
      }
      else
      {
        
        winpage.classList.add('fadeout');
        losepage.classList.add('fadein');
        tiepage.classList.add('fadeout');
       }
       return true;
    }     
    return false; 

}

/*function gamedeclaration(pscore,cscore)
{
    if(cscore.textContent>5||pscore.textContent>5)
    {
        console.log("yes");
        window.onload=function(){
            setTimeout(function(){
                popup.style.display="block";
            },2000)
        }
    }
}*/


let game= (playerchoice,computerchoice,round) => 
{
    let heading=document.querySelector('.choose');
    let buttonrock=document.querySelector('.rock');
    let buttonpaper=document.querySelector('.paper');
    let buttonscissors=document.querySelector('.scissors');
    
   
    
    if(playerchoice===computerchoice)
    { 
        
        heading.textContent="It is a Tie!";
        if(playerchoice===buttonrock)
        {
            playerhand.src="assets/rockplayer.png";
            computerhand.src="assets/rock.png";
        }
        else if(playerchoice===buttonpaper)
        {
            playerhand.src="assets/paperplayer.png";

            computerhand.src="assets/paper.png";
        }
        else
        {
            playerhand.src="assets/scissorsplayer.png";
            computerhand.src="assets/scissors.png";
        }
        return;

    }
        if(playerchoice===buttonrock)
        {
            playerhand.src="assets/rockplayer.png";
            if(computerchoice===buttonpaper)
            {
               
                
                computerhand.src="assets/paper.png";
                heading.textContent="Computer Won";
             if(round.textContent<10)
             {
              
                cscore.textContent++;
                round.textContent++;
             }

                return;
            }
            else{
               
                
                computerhand.src="assets/scissors.png";
                heading.textContent="You Won";
             if(round.textContent<10)
             {
              
                pscore.textContent++;
                round.textContent++;
             }
                return ;
            }
        }
        if(playerchoice===buttonpaper)
        {
            playerhand.src="assets/paperplayer.png";
            if(computerchoice===buttonscissors)
            {
                computerhand.src="assets/scissors.png";
                heading.textContent="Computer Won";
             if(round.textContent<10)
             {
              
                cscore.textContent++;
                round.textContent++;
                return;
             }
            }
            else{
            
               
                computerhand.src="assets/rock.png";
                heading.textContent="You Won";
             if(round.textContent<10)
             {
              
                pscore.textContent++;
                round.textContent++;
                return ;
             }
            }
        }
        if(playerchoice===buttonscissors)
        {
            playerhand.src="assets/scissorsplayer.png";
            if(computerchoice===buttonrock)
            {
              
               
                computerhand.src="assets/rock.png";
                heading.textContent="Computer Won";
             if(round.textContent<10)
             {
              
                cscore.textContent++;
                round.textContent++;
                return;
             }
            }
            else{
                
                
                computerhand.src="assets/paper.png";
                heading.textContent="You Won";
             if(round.textContent<10)
             {
              
                pscore.textContent++;
                round.textContent++;
                return ;
             }
            }
        }

       
}




select();

