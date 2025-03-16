import { Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MisionComponent } from './pages/mision/mision.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

export const routes: Routes = [{ path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'mision', component: MisionComponent },
    { path: 'ubicacion', component: UbicacionComponent },
    { path: '', redirectTo: 'productos', pathMatch: 'full' }];
