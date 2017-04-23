import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  testSorulari:any[];
  constructor(private _testService : TestService) {
        this._testService.getTest().subscribe(testSorulari => {
            this.testSorulari=testSorulari;
     });
   }

  ngOnInit() {
  }

}
