import { Routes } from '@angular/router';
import { indexcomponent } from './components/indexcomponent/index.component';
import { UploadComponent } from './components/upload/uploadFile-component';

export const routes: Routes = [
        {
               path: '',
               component: indexcomponent,
               pathMatch:'full'
        },
        {
                path:'upload',
                component:UploadComponent
        }
];
