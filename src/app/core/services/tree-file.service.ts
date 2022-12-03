import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TreeFileService {

  constructor(private http: HttpClient) { }

  createActa(request,idNodo: string){
    const formData: any = new FormData();
    formData.append('idNodo', idNodo);
    formData.append('nombreArchivo', request.nameFile);
    formData.append('codigoSistemaAplicable', request.managementSystem);
    formData.append('tipoReunion', request.typeMeeting);
    formData.append('numeroActa', request.actaNumber);
    formData.append('file', request.archive);
    return this.http.post(`api/treefile/acta/`,formData, {responseType: 'text'});
  }

  createEspe(request,idNodo: string){
    const formData: any = new FormData();
    formData.append('idNodo', idNodo);
    formData.append('nombreArchivo', request.documentName);
    formData.append('codigoDocumento', request.code);
    formData.append('versionDocumento', request.version);
    formData.append('codigoResolucion', request.resolution);
    formData.append('fechaAprobacion', request.dateApproval);
    formData.append('codigoSistemaAplicable', request.applicableSystems);
    formData.append('tipoDocumento', request.typeDoc);
    formData.append('file', request.archive);
    return this.http.post(`api/treefile/espe/`,formData, {responseType: 'text'});
  }

  createExte(request,idNodo: string){
    const formData: any = new FormData();
    formData.append('idNodo', idNodo);
    formData.append('nombreArchivo', request.documentName);
    formData.append('numeroResolucion', request.numberResolution);
    formData.append('tipoDocumento', request.typeDoc);
    formData.append('fechaDocumento', request.date);
    formData.append('file', request.archive);
    return this.http.post(`api/treefile/exte/`,formData, {responseType: 'text'});
  }
}
