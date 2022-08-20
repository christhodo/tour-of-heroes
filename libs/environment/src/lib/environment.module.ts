import { NgModule, ModuleWithProviders } from '@angular/core';
import { HERO_ENVIRONMENT } from './heroes.token';
import { HeroEnvironment } from './heroes.model';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: HeroEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: HERO_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
