// Providers
import { ToastService } from "../providers/utils/toast.service";
import { AlertService } from "../providers/utils/alert.service";
import { CameraProvider } from "../providers/utils/camera.service";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { UserServiceProvider } from "../providers/user-service/user-service";
// --------------------------------------------------

// Native Providers
import { Camera } from "@ionic-native/camera";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
// --------------------------------------------------

// Modules
import { AddUserPageModule } from './../pages/add-user/add-user.module';
import { HomePageModule } from "../pages/home/home.module";
import { PrintPageModule } from "./../pages/report/print/print.module";
import { ProfilePageModule } from "../pages/profile/profile.module";
import { ReportPageModule } from "../pages/report/report.module";
import { LoginPageModule } from "./../pages/login/login.module";
import { ScannerPageModule } from "../pages/scanner/scanner.module";
// --------------------------------------------------

// Native Modules
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
// --------------------------------------------------

export const MODULES = [
  AddUserPageModule,
  HomePageModule,
  PrintPageModule,
  ProfilePageModule,
  ReportPageModule,
  LoginPageModule,
  ScannerPageModule
];

export const NATIVEMODULES = [BrowserModule, HttpClientModule, IonicStorageModule.forRoot()];

export const PROVIDERS = [
  AlertService,
  ToastService,
  CameraProvider,
  BarcodeScanner,
  AuthServiceProvider,
  UserServiceProvider
];

export const NATIVEPROVIDERS = [Camera, StatusBar, SplashScreen];
