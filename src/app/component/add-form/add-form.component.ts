import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  formdata: any = {
    successmessage: "Added Successfully !!",
    submittext: "Submit Now",
    canceltext: "Cancel Now",
    resettext: "reset This",
    redirectpath: "",
    submitactive: true, //optional, default true
    apiUrl: '', // this._apiService.domain,
    endpoint: '',
    jwttoken: '', // this._apiService.jwttoken,
    //hidereset:true,
    //hidecancel:true,
    cancelroute: '/brand',
    fields: [
      // {
      //     heading: "This is Name Header <h1> Fill the form Up !! </h1>",
      //     label: "Name",
      //     name: "fullname",
      //     value: 'Test N',
      //     type: "text",
      //     disabled: true,
      //     validations: [
      //         { rule: 'required' },
      //         { rule: 'maxLength', value: 10 },
      //         { rule: 'minLength', value: 2 }
      //     ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"
      // },
      // {
      //     label: "Description",
      //     name: "desc",
      //     type: 'textarea',
      //     value: "This test !!",
      //     hint: "Desc .... ",
      //     validations: [
      //         { rule: 'required', message: "Email field Needs to be required" },
      //     ]
      // },
      // {
      //     label: "Html Description",
      //     name: "htmldesc",
      //     type: 'editor',
      //     value: "This test html <b>ff</b> !!",
      //     hint: "Desc .... ",
      //     validations: [
      //         { rule: 'required', message: "Html Desc field Needs to be required" },
      //     ]
      // },
      {
        // heading: "This is Name Header",
        label: 'First Name',
        name: 'firstname',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'First Name is Required' },

        ]
      },
      {
        heading: '',
        label: 'Last Name',
        name: 'lastname',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'Last Name is Required' },

        ]
      },
      {
        heading: '',
        label: 'Address',
        name: 'address',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'Last Name is Required' },

        ]
      },
      {
        heading: '',
        label: 'Email',
        name: 'email',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'Email is required' },
          { rule: 'pattern', value: this.emailregex, message: 'Must be a valid Email' }
        ]
      },
      {
        heading: '',
        label: 'Designation',
        name: 'designation',
        value: '',
        type: 'text',
        validations: [
          { rule: 'required', message: 'Designation is Required' },

        ]
      },


    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
