import { Component } from '@angular/core';


export class ChartData {
    constructor() {
        this.data = new Array<number>();
    }
    public data: Array<number>;
    label: string;
}
//export enum ChartType {
//    Line = "line",
//    doughnut = "doughnut",
//    bar = 2,
//    polarArea = 3,
//    radar = 4
//}




export class ChartObject {
    constructor() {
        this.ChartData = new Array<ChartData>();
    }
    public ChartData: Array<ChartData>;
    public Labels: Array<string>;
    public Options: any;
    public colors: Array<any>;
    public Legend: boolean;
    public ChartType: string;
}


@Component({
    selector: 'menu-form',
    templateUrl: './menu.component.html',
})
export class MenuComponent {

    public lineChart: ChartObject = new ChartObject();
    public pieChart: ChartObject = new ChartObject();
    constructor() {
        this.lineChart = this.GetLineChartData();
    }


    public GetLineChartData(): ChartObject {
        // lineChart
        let _lineChart = new ChartObject();
        _lineChart.ChartData.push(
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        );
        _lineChart.Labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        _lineChart.Options = { responsive: true }
        _lineChart.Legend = true;
        _lineChart.ChartType = 'line';

        return _lineChart;
    }

    //public lineChartData: Array<any> = [
    //    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    //    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    //];
    //public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    //public lineChartOptions: any = {
    //    responsive: true
    //};
    //public lineChartColors: Array<any> = [
    //    { // grey
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(148,159,177,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //    },
    //    { // dark grey
    //        backgroundColor: 'rgba(77,83,96,0.2)',
    //        borderColor: 'rgba(77,83,96,1)',
    //        pointBackgroundColor: 'rgba(77,83,96,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(77,83,96,1)'
    //    },
    //    { // grey
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(148,159,177,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //    }
    //];
    //public lineChartLegend: boolean = true;
    //public lineChartType: string = 'line';

    //public randomize(): void {
    //    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //    for (let i = 0; i < this.lineChartData.length; i++) {
    //        _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
    //        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //        }
    //    }
    //    this.lineChartData = _lineChartData;
    //}

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';



    //public randomizeType(): void {
    //    this.lineChartType = this.lineChartType ==== 'line' ? 'bar' : 'line';
    //    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    //}
}
