import { Component } from '@angular/core';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { itemModel } from './model/itemModel';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  frameworkComponents: any;
  selectedRow: itemModel;
  title = 'dragatron-new';

  constructor(private httpClient: HttpClient) {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
    this.selectedRow = { itemName: null, itemDescription: null, itemPrice: null, itemAdditionDate: null };
  }

  columnDefs = [
    { headerName: 'Name', field: 'itemName', sortable: true, filter: true },
    { headerName: 'Description', field: 'itemDescription', sortable: true, filter: true },
    { headerName: 'Price', field: 'itemPrice', sortable: true, filter: true },
    { headerName: 'Addition Date', field: 'itemAdditionDate', sortable: true, filter: true },
    {
      headerName: 'View Item',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.getSelectedRow.bind(this),
        label: 'View'
      }
    }
  ];

  rowData:any;

  getSelectedRow(eventObject: any) {
    this.selectedRow = eventObject.rowData;
    alert(`Selected Item: ${this.selectedRow.itemName}  `);
  }
  
  ngOnInit(){
    this.httpClient.get("assets/itemData.json").subscribe(data =>{
           this.rowData = data;
    })
  }
}
