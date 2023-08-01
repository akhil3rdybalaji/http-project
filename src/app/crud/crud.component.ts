import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
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
  this.http.post('http://localhost:3000/update',this.formdata).subscribe({
    next:((response) => {
      console.log(response)
      this.getData()
        // this.customerList.push(response)
    }),
    error:((error) =>{
      console.log(error)
  
    })
  })
  }
  

}
