import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StalAutocompleteModule } from '@stal/autocomplete';
import { StalPaginatorModule } from '@stal/paginator';
import { StalEventerModule } from '@stal/eventer';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DialogService } from 'primeng/dynamicdialog';

import { EngeCommonService } from './services/common.service';

@NgModule({
	imports: [
		/* add this 2 imports only in app module
		BrowserModule,
		HttpClientModule,
		StalEventerModule,
		*/
	],
	providers: [
		EngeCommonService,
		DialogService,
	],
	exports: [
		CommonModule,

		FormsModule,
		ReactiveFormsModule,

		//StalEventerModule, // <- Remove if is imported from main module TEST
		StalAutocompleteModule,
		StalPaginatorModule,

		TableModule,
		InputTextModule,
		CalendarModule,
		ButtonModule,
		MenuModule,
		RippleModule,
		CardModule,

	],
})
export class EngeCommonLibModule { }
