import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get',
  templateUrl: './get-and-post.component.html',
  styleUrls: ['./get-and-post.component.css']
})
export class GetComponent implements OnInit {
  customerList:any;
formdata={
  id:'',
  names:'',
  email:'',
  PhoneNumber:'',
  Address:'',
}
constructor(private http:HttpClient){}
ngOnInit(){
  this.getData();
}
getData(){
this.http.get('http://localhost:3000/api/search').subscribe({
  next:((response) => {
    this.customerList= response;

    console.log(response)
  }),
  error:(error) => {
    console.log(error)

}
})
}
updateData(){
this.http.post('http://localhost:3000/post',this.formdata).subscribe({
  next:((response) => {
    console.log(response)

      this.customerList.push(response)
  }),
  error:((error) =>{
    console.log(error)

  })
})
}

}










 // customerList: any;
  // formData = {
  //   id:'',
  //   names: '',
  //   email: ''
  // };

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getDataFromServer();
  // }

  // getDataFromServer() {
  //   const apiUrl = 'http://localhost:3000/api/search'; // Replace with your API URL
  //   this.http.get(apiUrl).subscribe({
  //     next: (response) => {
  //       this.customerList = response;
  //       console.log('Data retrieved:', response);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   });
  // }

  // updateData() {
  //   this.http.post('http://localhost:3000/post', this.formData).subscribe({
  //     next: (response) => {
  //       // this.formData = { id: '', names: '', email: '' }; 
  //       console.log('Data successfully updated:', response);
  //       this.customerList.push(response);
  //     },
  //     error: (error) => {
  //       console.error('Error updating data:', error);
  //     }
  //   });
  // }