// Providers
import { ToastService } from "../providers/utils/toast.service";
import { AlertService } from "../providers/utils/alert.service";
import { CameraProvider } from "../providers/utils/camera.service";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
// --------------------------------------------------

// Native Providers
import { Camera } from "@ionic-native/camera";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
// --------------------------------------------------

// Modules
import { HomePageModule } from "../pages/home/home.module";
import { PrintPageModule } from "./../pages/report/print/print.module";
import { ProfilePageModule } from "../pages/profile/profile.module";
import { ReportPageModule } from "../pages/report/report.module";
import { LoginPageModule } from "./../pages/login/login.module";
import { RegisterPageModule } from "./../pages/register/register.module";
import { ScannerPageModule } from "../pages/scanner/scanner.module";
// --------------------------------------------------

// Native Modules
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
// --------------------------------------------------

export const MODULES = [
  HomePageModule,
  PrintPageModule,
  ProfilePageModule,
  ReportPageModule,
  LoginPageModule,
  RegisterPageModule,
  ScannerPageModule
];

export const NATIVEMODULES = [BrowserModule, HttpClientModule];

export const PROVIDERS = [
  AlertService,
  ToastService,
  CameraProvider,
  BarcodeScanner,
  AuthServiceProvider
];

export const NATIVEPROVIDERS = [Camera, StatusBar, SplashScreen];
