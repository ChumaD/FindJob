import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindJobsService {
job =[];
id=[];
jobname
  constructor(public http: HttpClient) { }

  findJob(){
    return this.http.get("https://us-central1-mlab-challenge.cloudfunctions.net/jobs")
    }
    getJob(){
      return this.job
    }
    jobInfor(ids){
      return this.http.get("https://us-central1-mlab-challenge.cloudfunctions.net/job?id=" + ids)
    }
    getInfor()
 {
   return this.id
 }
}
