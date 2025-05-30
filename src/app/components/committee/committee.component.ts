import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Committee {
  id: number;
  name: string;
  description: string;
}

interface Member {
  id: number;
  name: string;
  role: string;
  committeeId: number;
  description: string;
  photo: string;
}

@Component({
  selector: 'app-committee',
  templateUrl: './committee.component.html',
  styleUrls: ['./committee.component.scss']
})
export class CommitteeComponent implements OnInit {
  committees: any[] = [];  // ✅ Declare the committees property
  members: any[] = [];     // ✅ Declare the members property

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/data/committees.json').subscribe(data => this.committees = data);
    this.http.get<any[]>('assets/data/members.json').subscribe(data => this.members = data);
  }

  getMembersForCommittee(committeeId: number): any[] {
    return this.members.filter(m => m.committeeId === committeeId);
  }

  getMembersByCommitteeId(committeeId: number): Member[] {
    return this.members.filter(m => m.committeeId === committeeId);
  }

}
