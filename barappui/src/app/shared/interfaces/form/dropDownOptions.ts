import { Observable } from 'rxjs';

export interface DropdownOptions {
    multiselect: boolean;
    deselect: boolean;
    dataSource: Observable<any[]>;
    dataSourceOptions: { text: string; propertyName: string; };
}
