import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-iteam',
  imports: [],
  templateUrl: './iteam.html',
  styleUrl: './iteam.css'
})
export class Iteam {
  id = input.required<number>();
    name = input.required<string>();
    salary = input.required<number>();

    onDelete = output<number>();

  deleteItem(){
    if(confirm('คุณต้องการลบข้อมูลพนักงานรหัส ${this.id()}หรือไม่?')){
      console.log("ลบข้อมูล"+this.id())
      this.onDelete.emit(this.id())
    }
  }
    
}
