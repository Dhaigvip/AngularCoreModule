import { OnInit, OnDestroy } from '@angular/core';
import { UserCredentials } from '../../tcmcore-objects/tcmcore.domain.objects';
import { IAuthService } from '../../tcmcore-objects/tcmcore.domain.interfaces';
import { Router, ActivatedRoute } from '@angular/router';
export declare class SignInComponent implements OnInit, OnDestroy {
    private auth;
    private router;
    private route;
    credentials: UserCredentials;
    errors: any;
    paramSub: any;
    redirectURL: any;
    constructor(auth: IAuthService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    SignIn: () => void;
}
