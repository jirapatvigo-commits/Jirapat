import { Component } from "@angular/core";
import { Header } from "./header/header";
import { Iteam } from "./iteam/iteam";
import { Addform } from "./addform/addform";

export interface Employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Iteam, Addform],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  data: Employee[] = [
    { id: 101, name: "piew", salary: 25000 },
    { id: 102, name: "an", salary: 30000 },
    { id: 103, name: "mac", salary: 35000 },
    { id: 104, name: "pu", salary: 25000 },
  ];

  removeDataById(id: number) {
    if (confirm(`คุณต้องการลบข้อมูลพนักงานรหัส ${id} หรือไม่?`)) {
      this.data = this.data.filter((emp) => emp.id !== id);
    }
  }

  
  insertData(emp: Employee) {
    this.data.unshift(emp); 
  }
}
