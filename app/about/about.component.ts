import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: 'app-about',
    moduleId: module.id,
    templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

    leaders: Leader[];
    errMess: string;

    constructor(private leaderservice: LeaderService,
        @Inject('baseURL') private baseURL) {
    }

    ngOnInit() {
        this.leaderservice.getLeaders()
            .subscribe(leaders => this.leaders = leaders,
                err => this.errMess = <any>err);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}