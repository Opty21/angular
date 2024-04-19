import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { APP_CONFIG } from 'projects/space-app/src/app-config-token';
import { AppConfig } from 'space-api/types';

@Directive({
  selector: '[appIfFeatureEnabled]'
})
export class IfFeatureEnabledDirective { // structural directive
  hasView = false;
  tempRef = inject(TemplateRef)
  viewContRef = inject(ViewContainerRef)
  appConfig = inject(APP_CONFIG)

  @Input('appIfFeatureEnabled') set featureName(value: keyof AppConfig['features']) {
    if(this.appConfig['features'][value]){
      this.viewContRef.createEmbeddedView(this.tempRef)
      this.hasView = true
    } else{
      this.viewContRef.clear()
      this.hasView = false
    }
  }
}
