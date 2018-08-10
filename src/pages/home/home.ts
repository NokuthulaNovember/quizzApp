import { Component } from '@angular/core';
import { NavController, FabButton } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

selectedQuiz='sport'
B:String;
quizzOption=['sports','movies','politics']

// sport category
checkSports1:string;
checkSports2:string;
checkSports3:string;
checkSports4:string;
checkSports5:string;

sportsscore1=0;
sportsscore2=0;
sportsscore3=0;
sportsscore4=0;
sportsscore5=0;

totalscore1=0;



sportAns1='juveteam';
sportAns2='peleteam';
sportAns3='julenteam';
sportAns4='bloemteam';
sportAns5='giorgioteam';



// movies category
checkmovies1:string;
checkmovies2:string;
checkmovies3:string;
checkmovies4:string;
checkmovies5:string;

moviescore1=0;
moviescore2=0;
moviescore3=0;
moviescore4=0;
moviescore5=0;

totalscore2=0;

movAns1='ums';
movAns2='mos';
movAns3='sto';
movAns4='hart';
movAns5='paulw';



// politics category
checkpolitics1:string;
checkpolitics2:string;
checkpolitics3:string;
checkpolitics4:string;
checkpolitics5:string;

politicscore1=0;
politicscore2=0;
politicscore3=0;
politicscore4=0;
politicscore5=0;

totalscore3=0;

polAns1='zu';
polAns2='emm';
polAns3='dek';
polAns4='jz';
polAns5='rmu';


checkQue1():number{
  
if (this.checkSports1==this.sportAns1)
{
 this.sportsscore1=10;
}
return this.sportsscore1;
 
}


checkQue2():number{
  
  if (this.checkSports2==this.sportAns2)
  {
   this.sportsscore2=10;
  }
  return this.sportsscore2;
   
  }

  checkQue3():number{
  
    if (this.checkSports3==this.sportAns3)
    {
     this.sportsscore3=10;
    }
    return this.sportsscore3;
     
    }

    checkQue4():number{
  
      if (this.checkSports4==this.sportAns4)
      {
       this.sportsscore4=10;
      }
      return this.sportsscore4;
       
      }

      checkQue5():number{
  
        if (this.checkSports5==this.sportAns5)
        {
         this.sportsscore5=10;
        }
        return this.sportsscore5;
         
        }
        totalCat1():void{
          this.totalscore1=this.checkQue1()+this.checkQue2()+this.checkQue3()+this.checkQue4()+this.checkQue5();

        
        }
         
          


        ccheck1():number{
  
          if (this.checkmovies1==this.movAns1)
          {
           this.moviescore1=10;
          }
          return this.moviescore1;
           
          }
          
          
          ccheck2():number{
            
            if (this.checkmovies2==this.movAns2)
            {
             this.moviescore2=10;
            }
            return this.moviescore2;
             
            }
          
            ccheck3():number{
            
              if (this.checkmovies3==this.movAns3)
              {
               this.moviescore3=10;
              }
              return this.moviescore3;
               
              }
          
              ccheck4():number{
            
                if (this.checkmovies4==this.movAns4)
                {
                 this.moviescore4=10;
                }
                return this.moviescore4;
                 
                }
          
                ccheck5():number{
            
                  if (this.checkmovies5==this.movAns5)
                  {
                   this.moviescore5=10;
                  }
                  return this.moviescore5;
                }
                totalCat2():void{
                  this.totalscore2=this.ccheck1()+this.ccheck2()+this.ccheck3()+this.ccheck4()+this.ccheck5();
        
                
                }
        check1():number{
  
          if (this.checkpolitics1==this.polAns1)
          {
           this.politicscore1=10;
          }
          return this.politicscore1;
           
          }
          
          
          check2():number{
            
            if (this.checkpolitics2==this.polAns2)
            {
             this.politicscore2=10;
            }
            return this.politicscore2;
             
            }
          
            check3():number{
            
              if (this.checkpolitics3==this.polAns3)
              {
               this.politicscore3=10;
              }
              return this.politicscore3;
               
              }
          
              check4():number{
            
                if (this.checkpolitics4==this.polAns4)
                {
                 this.politicscore4=10;
                }
                return this.politicscore4;
                 
                }
          
                check5():number{
            
                  if (this.checkpolitics5==this.polAns5)
                  {
                   this.politicscore5=10;
                  }
                  return this.politicscore5;
                }
                totalCat3():void{
                  this.totalscore3=this.check1()+this.check2()+this.check3()+this.check4()+this.check5();
        
                
                }
  constructor(public navCtrl: NavController) {

  }

}
