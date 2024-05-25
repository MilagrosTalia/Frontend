import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Peluquero } from '../../interfaces/peluquero.js';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AgregarEditarPeluqueroComponent } from '../agregar-editar-peluquero/agregar-editar-peluquero.component.js';


const listPeluquero: Peluquero[] = [
  { id:54784, nombreyape: "Manuel", tipo:"Sucursal", fechaCarga: new Date },
  { id:54784, nombreyape: "Agustin", tipo:"Sucursal", fechaCarga: new Date },
  { id:54784, nombreyape: "Julieta", tipo:"Sucursal", fechaCarga: new Date },
  { id:54784, nombreyape: "Manuel", tipo:"Sucursal", fechaCarga: new Date },
  { id:54784, nombreyape: "Manuel", tipo:"Sucursal", fechaCarga: new Date },
  { id:54784, nombreyape: "Manuel", tipo:"Sucursal", fechaCarga: new Date },
];

@Component({
  selector: 'app-list-peluquero',
  templateUrl: './list-peluquero.component.html',
  styleUrl: './list-peluquero.component.css'
})
export class ListPeluqueroComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombreyape', 'tipo', 'fechaCarga', 'acciones'];
  dataSource: MatTableDataSource<Peluquero>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog){
    this.dataSource = new MatTableDataSource(listPeluquero);
  }

  ngOnInit(): void{

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = "Items";
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addEditPeluquero(){
    const dialogRef = this.dialog.open(AgregarEditarPeluqueroComponent, {
      width: '700px',
      height:'500px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Este dialogo fue cerrado');
    });
  }
}


