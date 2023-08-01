import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  customerList:any;
  formdata={
    id:''
    
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
  this.http.post('http://localhost:3000/delete',this.formdata).subscribe({
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
