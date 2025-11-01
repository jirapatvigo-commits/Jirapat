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

    let emp:Employee={
      id:Math.floor(Math.random()*1000),
      // name:this.fullname(),
      salary: this.salary().toString()

    }

    this.onSave.emit(emp)

    console.log(emp);
    this.fullname.set("")
    this.salary.set(15000)
  }
}
