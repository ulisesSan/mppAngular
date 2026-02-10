import { Component, signal } from "@angular/core";
import { FileService } from "../../services/file-service";
import { CommonModule } from "@angular/common";

interface Mpp {
  id: number;
  taskName: string;
  startDate: string;
  duration: string;
  percentageComplete:number;
  predecessor:string;
  predecessors:string;
  hierarchyLevel: number;
}

interface Project{
  mpp: Mpp[];
  persentageComplete: number;
}

@Component({
        selector:'app-upload',
        imports:[CommonModule],
        templateUrl:'./uploadFile-component.html',
        styleUrl: './uploadFile-component.css'
})

export class UploadComponent{

  archivoSeleccionado: File | null = null;
  
  // Definimos las tareas como una Signal
  tareasDelProyecto = signal<Project | null>(null);

  constructor(private fileService: FileService) {}

  onFileChange(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  subirArchivo() {
    if (!this.archivoSeleccionado) return;

    this.fileService.uploadFile(this.archivoSeleccionado).subscribe({
      next: (data:any) => {
        console.log("Datos recibidos:", data);
        // Actualizamos la señal con los datos de Java
        this.tareasDelProyecto.set(data);
      },
      error: (err) => {
        console.error("Error en la subida:", err);
      }
    });
  }
}