import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from '../shared/auth/auth.service';
import { environment } from '../../environments/environment';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
email: string;
pwd: string;
envName = environment.envName;

    @ViewChild('f', {static: true}) loginForm: NgForm;
   constructor(private router: Router,
        private route: ActivatedRoute, private authService: AuthService) { }

    // On submit button click    
    onSubmit() {
        this.authService.login(this.email, this.pwd)
        .pipe(first())
        .subscribe(
            data => {
                let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
                //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if(currentUser && currentUser.token){
                    this.router.navigate(['/dashboard']);
                }
                
                
                
            },
            error => {
                console.log(error);
            });

    
    }
    // On Forgot password link click
    onForgotPassword() {
        //this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        //this.router.navigate(['register'], { relativeTo: this.route.parent });
    }
}