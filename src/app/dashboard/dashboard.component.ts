import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentServiceService } from '../services/student-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialigComponent } from '../dialig/dialig.component';
import { StudentModel } from '../models/student';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'std_id',
    'std_name',
    'clgname',
    'email',
    'mobileNumber',
    'qualification',
    'fees',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public student = new StudentModel();

  constructor(
    private _dialog: MatDialog,
    private _service: StudentServiceService,
  ) {}

  ngOnInit() {
    this.getAllStudents();
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllStudents() {
    this._service.getStudents().subscribe({
      next: (val: any) => {
        this.dataSource = new MatTableDataSource(val);

        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;

        // console.log(val);
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  deleteStudent(id: any) {
    this._service.deleteStudent(id).subscribe({
      next: (val: any) => {
        alert(val.body);

        this.getAllStudents();
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  openeditStudent(row: any) {
    this._dialog
      .open(DialigComponent, {
        width: '50%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'Update') {
          this.getAllStudents();
        }
      });
  }


  }

