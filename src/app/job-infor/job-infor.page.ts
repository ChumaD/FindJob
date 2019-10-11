import { Component, OnInit } from '@angular/core';
import {FindJobsService} from '../service/find-jobs.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-job-infor',
  templateUrl: './job-infor.page.html',
  styleUrls: ['./job-infor.page.scss'],
})
export class JobInforPage implements OnInit {
id
jobbb
  constructor(public findJob: FindJobsService,public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getJobb(this.id);
  }
  getJobb(id) {
    this.findJob.jobInfor(id).subscribe((data) => {
      this.jobbb = data;
      console.log(this.jobbb);
    });
}
}
