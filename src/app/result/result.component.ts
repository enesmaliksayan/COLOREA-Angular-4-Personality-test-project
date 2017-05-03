import { Component,OnInit } from '@angular/core';
import { TestComponent } from '../test/test.component';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{

  cevaplar={
    'kirmiziSayisi':0,
    'maviSayisi':0,
    'sariSayisi':0,
    'yesilSayisi':0
  }
 
  // Pie
  public pieChartLabels:string[] = ['Kırmızı Karakter', 'Mavi Karakter', 'Sarı Karakter','Yeşil Karakter'];
  public pieChartData:number[];
  public myColors = [{ backgroundColor: ['#d9534f', '#0275d8', 'gold','#5cb85c']}];
  public pieChartType:string = 'pie';

  // events
  public chartClicked(e:any):void {
    console.log(this.pieChartData);
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(_testService:TestService) {
    this.cevaplar=_testService.sonucGetir();
    this.pieChartData=[this.cevaplar.kirmiziSayisi,this.cevaplar.maviSayisi,this.cevaplar.sariSayisi,this.cevaplar.yesilSayisi];

      }
    
    ngOnInit(){
      console.log(this.pieChartData);
    }
}
