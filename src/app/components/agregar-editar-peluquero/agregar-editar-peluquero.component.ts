import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Peluquero } from '../../interfaces/peluquero.js';
import { validateVerticalPosition } from '@angular/cdk/overlay/index.js';

@Component({
  selector: 'app-agregar-editar-peluquero',
  templateUrl: './agregar-editar-peluquero.component.html',
  styleUrl: './agregar-editar-peluquero.component.css'
})
export class AgregarEditarPeluqueroComponent implements OnInit {
  tipoPeluquero: string[] = ['Sucursal', 'A domicilio'];
  form: FormGroup;
  maxDate: Date;

  constructor(public dialogRef: MatDialogRef<AgregarEditarPeluqueroComponent>, private fb: FormBuilder){
    //El formBuilder nos ayuda a crear el formulario.
    this.maxDate = new Date();
    this.form = this.fb.group({
      //Por aca pasamos los datos cargados desde el listado.
      id:[null, [Validators.required,Validators.pattern("^[0-9]*$"), Validators.maxLength(5)]], //al ser tipo int lo ponemos nulo.
      nombreyape:['', [Validators.required, Validators.maxLength(30)]], //Pasasmos las validaciones de angular forms como parametro.
      tipo:[null, Validators.required],
      fechaCarga:[null, Validators.required],
  })
  }

  ngOnInit(): void{

  }

  cancelar(){
    this.dialogRef.close();
  }

  //Metodo usado en el formulario (invocado desde el html) para agregar o editar Peluqueros
  addEditPeluquero(){ 
    //Creamos el objeto Peluquero
    const peluquero: Peluquero = {
      id: this.form.value.id,
      nombreyape: this.form.value.nombreyape,
      tipo: this.form.value.tipo,
      fechaCarga: this.form.value.fechaCarga,
    }
    console.log(peluquero);
  }
}
