import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Employee {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string;
  postedDate: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],  // เพิ่มบรรทัดนี้
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App {
  title = 'job-portal';
  
  jobs: Employee[] = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Co.',
      location: 'กรุงเทพฯ',
      salary: '40,000 - 60,000',
      type: 'Full-time',
      description: 'ต้องการผู้พัฒนาเว็บไซต์ที่มีประสบการณ์ด้าน React, Angular หรือ Vue.js',
      requirements: 'ประสบการณ์อย่างน้อย 2 ปี, มีทักษะ HTML, CSS, JavaScript',
      postedDate: '2024-10-25'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Digital Innovation Ltd.',
      location: 'เชียงใหม่',
      salary: '45,000 - 70,000',
      type: 'Full-time',
      description: 'รับสมัคร Backend Developer สำหรับพัฒนา API และระบบฐานข้อมูล',
      requirements: 'มีประสบการณ์ Node.js, Express, MongoDB หรือ PostgreSQL',
      postedDate: '2024-10-28'
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'Creative Studio',
      location: 'ภูเก็ต',
      salary: '35,000 - 55,000',
      type: 'Full-time',
      description: 'ออกแบบ User Interface และ User Experience สำหรับแอปพลิเคชันและเว็บไซต์',
      requirements: 'มีประสบการณ์ Figma, Adobe XD, Sketch, Portfolio ที่โดดเด่น',
      postedDate: '2024-10-30'
    }
  ];

  filteredJobs: Employee[] = [...this.jobs];
  searchTerm: string = '';
  showModal: boolean = false;
  editingJob: Employee | null = null;

  formData: Partial<Employee> = {
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Full-time',
    description: '',
    requirements: ''
  };

  jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance'];

  filterJobs(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    );
  }

  openAddModal(): void {
    this.editingJob = null;
    this.formData = {
      title: '',
      company: '',
      location: '',
      salary: '',
      type: 'Full-time',
      description: '',
      requirements: ''
    };
    this.showModal = true;
  }

  openEditModal(job: Employee): void {
    this.editingJob = job;
    this.formData = { ...job };
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  saveJob(): void {
    if (!this.formData.title || !this.formData.company || !this.formData.location ||
        !this.formData.salary || !this.formData.description || !this.formData.requirements) {
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
      return;
    }

    if (this.editingJob) {
      const index = this.jobs.findIndex(j => j.id === this.editingJob!.id);
      if (index !== -1) {
        this.jobs[index] = { ...this.jobs[index], ...this.formData as Employee };
      }
    } else {
      const newJob: Employee = {
        id: Date.now(),
        title: this.formData.title!,
        company: this.formData.company!,
        location: this.formData.location!,
        salary: this.formData.salary!,
        type: this.formData.type!,
        description: this.formData.description!,
        requirements: this.formData.requirements!,
        postedDate: new Date().toISOString().split('T')[0]
      };
      this.jobs.unshift(newJob);
    }

    this.filterJobs();
    this.closeModal();
  }

  deleteJob(id: number): void {
    if (confirm('คุณต้องการลบประกาศงานนี้หรือไม่?')) {
      this.jobs = this.jobs.filter(j => j.id !== id);
      this.filterJobs();
    }
  }
}