// Providers
import { ToastService } from "../providers/utils/toast.service";
import { AlertService } from "../providers/utils/alert.service";
import { CameraProvider } from "../providers/utils/camera.service";
// --------------------------------------------------
// Modules
import { HomePageModule } from "../pages/home/home.module";
import { ProfilePageModule } from "../pages/profile/profile.module";
import { ListPageModule } from "../pages/list/list.module";
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
  ProfilePageModule,
  ListPageModule,
  LoginPageModule,
  ScannerPageModule
];

export const PROVIDERS = [
  AlertService,
  ToastService,
  CameraProvider,
  BarcodeScanner
];
