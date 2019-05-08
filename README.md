# TCM Core Library

## Installation

To install this library, run:

```bash
$ npm install tcm-base-module --save
```

## Consuming your library


vipuldhaigude@gmail
npm user - tcmreg
password - tcm2619

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install tcm-base-module --save
```

and then from your Angular `AppModule` module :

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { TCMMaterialModule, TCMCoreModule, TCM_CORE_CONFIG, AppBootstrap } from "tcm-base-module";

//Bootstrap application using TCM Core Bootstrap
export function startupServiceFactory(startupService: AppBootstrap): Function {
    return () => {
        return startupService.Bootstrap("YourModule",'sv-SE').then((result => {
            return true;
        })).catch((error) => {
            return false;
        });
    }
}
//Configure Translation service.
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot(MAIN_ROUTES),
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        TCMMaterialModule,
        TCMCoreModule,        
        HttpModule
    ],
    providers: [
        { provide: TCM_CORE_CONFIG, useValue: { url: environment.url } },
        {
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            multi: true,
            deps: [AppBootstrap]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
}
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## TO DO 
1. Use LOCALE_ID to get current culture, LOCALE_ID should be configured in parent app, static locale defined in environment file.


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## How to publish your library to npm registry
### 1. npm publish

Create you library package using following command
```bash
$ npm run lib-build
```
It will generate the `LibraryDist` folder containing the library code.
You can publish any directory that has a package.json file.

* Creating a user
```bash
npm adduser.
```

If you created a user account on the site, use `npm login` to store the credentials on your client.

`npm whoami` from a terminal to ensure that your credentials are stored on your client.

Check that the user has been added to the registry at https://npmjs.com/~username.
For example,

```bash
https://www.npmjs.com/~carolynawombat
```

* Publishing the package
  Choose a unique name for your package. 

 Use `npm publish` to publish the package.

.gitignore or .npmignore -to ignore content.

Go to https://npmjs.com/package/<package>. 
You should see the information for your new package.


* Updating the package
```bash
npm version <update_type>
```bash
where <update_type> is one of the semantic versioning release types, `patch, minor, or major`.

This command will change the version number in package.json.

Note: this will also add a tag with the updated release number to your git repository if you have one.

After updating the version number, run `npm publish` again.

Test: Go to https://npmjs.com/package/<package>. The package number should be updated.

How to Update the Read Me File
The README displayed on the site will not be updated unless a new version of your package is published, so you would need to run npm version patch and npm publish to have a documentation fix displayed on the site.



## How to use TCM Core Library
### 1. Bootstraping Application
*Description*: 

TCM core bootstrap initialises commonly needed functions before application loads.
There is a defined sequence of events that calls variuos services and gets the referenced data needed for any web applicaiton to start.
example of the services initialised by TCM bootstrap are as below, these services are dependent of each other, hence runs in a sequential manner. If all the services gets initialised without any error then the control is passed to first Angular component to start rendering the views. This service returns a promise.

*How To* : 

In your **APP_INITIALIZER** factory function call `AppBootstrap.Bootstrap('ModuleName','CultureName')`

Bootstrap function takes two parameters, unique identification for Module and initial culture.

* Localisation-   Sets default language and cuture for the application.
* Culture-        Reads the culture from cookies, so user specific culture gets set.
* Themes-         Reads the user selected theme from cookie and set it for application. Default theme is Primary (purple).
* Authetication-  Calls Authentication servie to autheticate user via 'Windows Authetication'.
* User Context-   Retrives UserContext token, which is used to identify user during each request to TCM web services.
* Persistence-    Gets users customisation settings from persistent store.
* Static Data-    Gets static / reference data ex: currency, country etc and cache it.
* Dashboard-      Initialise 'Dashboard' service. Dashboard service is SignalR services which pushes dashboard data to client.

### 2. Navigation
Navigation (Menus) which are used for displaying menu structure html for an application, should be defined in a file and imported during runtime. Navigation component available in TCM core used the defined navigation structure to render the menus.
see example file app.route.config

Assign routes to navigation component
```bash
<navbar-cmp [Routes]="routes"></navbar-cmp>
```

### 3. Footer
TCM footer are configurable and content of the footer can vary as per parent module.
You can configure following information on footer 
- app-name
- app-about
- app-license
- app-copyright
ex: 
```xml
<footer-cmp>
            <a href="#" app-name>TCM Fund Module</a>
            <a href="#" app-about></a>
            <a href="#" app-license>MIT</a>
            <a herf="#" app-copyright>&copy; 2017, Tieto Software Pvt Ltd.</a>
</footer-cmp>
 ```

### 4. Localisation
We use third party package for applying localisation in all the modules. 
The library called as `'ng2-translate'`.

Default language is set in core bootstrap process where culture is passed as parameter while application bootstraps.

Location for your localised files should be `src\app\assets\i18n\`.
The nomen-clature for files are `culture+.json` ex: en-US.json, sv-SE.json ....

Configure TranslateModule in your parent application as -

```
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        })
 ```

In your translation consumer component  
```
'import { TranslatePipe } from 'ng2-translate';
```
 In html use pipe 
 ```
 {{ 'Name' | translate}} 
 ```

### 5. Using Styles
Include following styles in your webpack configuration
```
 "styles": [
            "./node_modules\\bootstrap\\dist\\css\\bootstrap.min.css",
            "./node_modules\\tcm-base-module\\bundles\\coreStyle.css",
            "./node_modules\\beta-tcm-jqgrid\\bundles\\jqgrid.css",
            "./node_modules\\ng2-toastr\\bundles\\ng2-toastr.min.css",
            "./node_modules\\@angular\\material\\prebuilt-themes\\indigo-pink.css",            
        ]
        ```

Make sure you exclude these css files from certain rules in webpack2 config and include in certain rules.
Please refer to existing webpack config.

### 7. Using Common Javascript
Include reference to Jquery at a global level in index.html. 

Jquery is needed for JQGrid and some plugins to work.
jQuery has to be at a global level so that webpack does not create multiple copies for each reference.
 ```
<script src="../node_modules/jquery/dist/jquery.min.js"></script> 
 ```

2. Include following javascript files in your webpack config.
 ```
"scripts": [
            "./node_modules\\tcm-base-module\\bundles\\tcmcore.js",
            "./node_modules\\beta-tcm-jqgrid\\bundles\\jqgrid.js",
            "./node_modules\\signalr\\jquery.signalR.js"
        ],
 ```

### 8 Dashboard
TCM core provides a Dashboard service which listens to the SignalR hubs on the server and receives Dashboard statistics. TCM Core boostrap initialises dashboard service during bootstraping process, hence this service is available as ready to use for any module.

1. Get all the messages stored in Dashboard service using `DashboardService.GetMessages()`
2. Listen to the event raised by dashboard service whenever new message arrives.
```
 _dashboard.newMessage.subscribe((m: DashboardData) => {            
        });
        ```

### 9 Authetication Service
TCM core provides a default windows authetication mechanism. 
Once the user is autheticated 'User Context' and 'User Token' is available to the client. 

TCM core bootstraping automatically executes Authetication service before application initialised.
* DataService automatically adds UserContext to any outgoing request so its available to TCM services while validating the incoming requests.
* DataService automaticalyy adds UserToken in request header which is needed by WEP api security validation.

Developer can access the UserContext and User Token from `SessionStorage` if needed. If you are calling http methods bypassing TCM core `DataService`, you must pass `UserContext` and `UserToken` manually.
Developer can call `IsAutheticated` function on Authentication service to validate if the user is Autheticated or not.
```
1. AuthService.IsAutheticated()
2. sessionStorage.getItem('UserToken')
3. sessionStorage.getItem('UserContext')
```


### 10 Wait Notification
TCM core shows a 'loading' symbol while waiting for a server operation to complete.
You can show loading icon by calling functions on `LoaderService`.
In you app.component initialisation subscribe to status change event of loader service and hide and show html accordingly.
```xml
<span *ngIf="showLoader" class="loading"></span>
```

* Start displaying loading icon 
```
loaderService.display(true);
```

* Hide loading icon  
```
loaderService.display(false);
```
### 11 Resource Files and Static data
TCM core uses  Resource Generator Utility to generate resource files for label translations and static data translations.

how to use -
* Developer can generate the json files using rs.exe at  $/TCM Product/ComponentRepository/UI Components/Technical/Generator/Generator.
* Developer needs to Update staticdata.csv and translations.csv files in Generator Folder.
* Developer needs to add Functional Module Name as first column in each row of the file.If any translation is common in more than one functional module then it should be added with module name ‘Common’
* Utility generates folder for each Functional Module and creates Json files in the same folder.
* Content in Functional Module specific json File = Text / Translation of ‘Common’ Module + Text / Translation of functional Module
For example files in XFM Fund Folder will have all translations specified as Common Module + XFM Module.
* Developer can copy these files in functional Modules and use.

## License
MIT � [vipul](mailto:vipul.dhaigude@tieto.com)


Installing Angular app on IIS

1. Install URL rewrite module on server.
```
https://www.iis.net/downloads/microsoft/url-rewrite
```
2. Add web.config with following content

```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=169433
  -->
<configuration>
  <system.web>
    <compilation debug="true" targetFramework="4.5.2"/>
    <httpRuntime targetFramework="4.5.2"/>   
  </system.web>
  <system.codedom>
    <compilers>
      <compiler language="c#;cs;csharp" extension=".cs"
        type="Microsoft.CodeDom.Providers.DotNetCompilerPlatform.CSharpCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
        warningLevel="4" compilerOptions="/langversion:6 /nowarn:1659;1699;1701"/>
      <compiler language="vb;vbs;visualbasic;vbscript" extension=".vb"
        type="Microsoft.CodeDom.Providers.DotNetCompilerPlatform.VBCodeProvider, Microsoft.CodeDom.Providers.DotNetCompilerPlatform, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
        warningLevel="4" compilerOptions="/langversion:14 /nowarn:41008 /define:_MYTYPE=\&quot;Web\&quot; /optionInfer+"/>
    </compilers>
  </system.codedom>
  <system.webServer>
  <rewrite>
    <rules>
      <rule name="Angular Routes" stopProcessing="true">
        <match url=".*" />
	  <conditions logicalGrouping="MatchAll">
	    <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
	    <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
	  </conditions>
	  <action type="Rewrite" url="/" />
      </rule>
    </rules>
  </rewrite>   
  </system.webServer>
</configuration>
```

versions
