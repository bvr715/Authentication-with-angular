import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentServiceService } from '../services/student-service.service';
import { StudentModel } from '../models/student';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialig',
  templateUrl: './dialig.component.html',
  styleUrls: ['./dialig.component.css'],
})
export class DialigComponent implements OnInit {
  public student = new StudentModel();

  public actionBtn: string = 'Save';
  formHeader:String='Add Student Form'

  constructor(
    private fb: FormBuilder,
    private _studentService: StudentServiceService,
    private _dialogRef: MatDialogRef<DialigComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any
  ) {}

  ngOnInit() {
    console.log(this.editData);
    if (this.editData) {
      this.formHeader="Update Student Form"
      this.actionBtn = 'Update';
      this.student.clgname = this.editData.clgname;
      this.student.email = this.editData.email;
      this.student.fees = this.editData.fees;
      this.student.mobileNumber = this.editData.mobileNumber;
      this.student.qualification = this.editData.qualification;
      this.student.std_name = this.editData.std_name;
    }
  }

  addStudent() {
    if (
      this.student.clgname != '' &&
      this.student.std_name != '' &&
      this.student.email != '' &&
      this.student.fees! > 0 &&
      this.student.qualification != '' &&
      this.student.clgname != null &&
      this.student.std_name != null &&
      this.student.email != null &&
      this.student.qualification != null &&
      this.student.fees > 10000
    ) {
      if (!this.editData) {
        this._studentService.addStudent(this.student).subscribe({
          next: (val) => {
            alert(val.body);

            this._dialogRef.close('Save');
          },
          error: (err) => {
            alert(err.message);
          },
        });
      } else {
        this.updateProduct();
      }
    } else {
      alert('form is empty');
    }
  }

  updateProduct() {
    this._studentService
      .editStudent(this.editData.std_id, this.student)
      .subscribe({
        next: (val) => {
          alert(val.body);
          this._dialogRef.close('Update');
        },
        error: (err) => {
          alert(err.message);
        },
      });
  }
}
