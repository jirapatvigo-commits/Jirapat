import { Component, signal,output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../app';


@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css'
})
export class Addform {
  fullname = signal('')
  salary = signal(15000)
  onSave = output<Employee>()

  addNewEmployee(){
    console.log("บันทึกข้อมูลใหม่");

    let emp: Employee = {
    id: 1,
    salary: '50000',
    title: 'Developer',           // เพิ่ม
    company: 'ABC Company',        // เพิ่ม
    location: 'Bangkok',           // เพิ่ม
    type: 'Full-time',  
    description: 'Job description here', // เพิ่ม 
    requirements: 'Job requirements here', // เพิ่ม
    postedDate: new Date().toISOString().split('T')[0] // เพิ่ม
    } ;

    this.onSave.emit(emp)

    console.log(emp);
    this.fullname.set("")
    this.salary.set(15000)
  }
}
