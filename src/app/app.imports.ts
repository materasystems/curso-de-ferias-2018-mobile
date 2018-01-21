// Providers
import { ToastService } from "../providers/utils/toast.service";
import { AlertService } from "../providers/utils/alert.service";
import { CameraProvider } from "../providers/utils/camera.service";
// --------------------------------------------------
// Modules
import { HomePageModule } from "../pages/home/home.module";
import { PrintPageModule } from './../pages/report/print/print.module';
import { ProfilePageModule } from "../pages/profile/profile.module";
import { ReportPageModule } from "../pages/report/report.module";
import { LoginPageModule } from './../pages/login/login.module';
import { ScannerPageModule } from "../pages/scanner/scanner.module";
// --------------------------------------------------
// Native Modules
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
// --------------------------------------------------
export const MODULES = [
  BrowserModule,
  HttpClientModule,
  HomePageModule,
  PrintPageModule,
  ProfilePageModule,
  ReportPageModule,
  LoginPageModule,
  ScannerPageModule
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  CameraProvider,
  BarcodeScanner
];
