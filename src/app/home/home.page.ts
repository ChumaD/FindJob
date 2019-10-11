import { Component } from '@angular/core';
import { FindJobsService } from '../service/find-jobs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
job =[];
jobname
jobinfo
  constructor(public fingJobs:FindJobsService) {

    this.fingJobs.findJob().subscribe(
      ((data) =>{
        this.jobinfo = data
        console.log(this.jobinfo);
        for (let i = 0; i < 50; i++)
        {
   +-        this.job.push({name:this.jobinfo[i]})
   console.log(this.job);
   
        }
      })
    )}
  
    // getJob(){
    //   this.fingJobs.findJob(this.jobname).subscribe(
    //     ((data) =>{
    //       this.jobinfo = data
    //       console.log(this.jobinfo);
    //       for (let i = 0; i < 50; i++)
    //       {
    //  +-        this.job.push({name:this.jobinfo[i]})
    //  console.log(this.job);
     
    //       }
    //     })
    //   )}
    }
  

