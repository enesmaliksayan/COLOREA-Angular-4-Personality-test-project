import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  testSorulari:any[];
  id:number=26;
  SoruBittiMi:boolean=false;

  cevaplar={
    'kirmiziSayisi':0,
    'maviSayisi':0,
    'sariSayisi':0,
    'yesilSayisi':0
  }


  constructor(private _testService : TestService) {
        this.getQuestion(this.id);
      }

   answered:string = '';

   getQuestion(id:number) {
    this._testService.getTest(id).subscribe(testSorulari => {
                this.testSorulari=testSorulari;
                console.log('test Soruları:  ' +this.testSorulari);
        });
   }

  ngOnInit() {
  }

  nextQuestion(){
     switch(this.answered)
     {
       case 'Red':
         this.cevaplar.kirmiziSayisi++;
       break;

       case 'Yellow':
         this.cevaplar.sariSayisi++;
       break;

       case 'Blue':
         this.cevaplar.maviSayisi++;
       break;

       case 'Green':
         this.cevaplar.yesilSayisi++;
       break;
     }

    this.id++;
    if(this.id==41){
      this.SoruBittiMi=true;
    }
    else{
      this.getQuestion(this.id);
    }
    
  };

  sonucuYolla(){
    this._testService.sonuc(this.cevaplar);
  }
}
