// getdata.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient here

@Component({
  selector: 'app-getdata',
  templateUrl:'./get.component.html'
})
export class GetDataComponent implements OnInit {
  data: any;
 

  constructor(private http: HttpClient) {} // Inject HttpClient here

  ngOnInit() {
    this.getDataFromServer();
  }

  getDataFromServer() {
    const apiUrl = 'http://localhost:3000/api/search'; // Replace with your API URL
    this.http.get(apiUrl).subscribe((response) => {
      this.data = response;
      console.log(response);
      
    });
  }



}



 





