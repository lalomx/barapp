import { Observable } from 'rxjs';

export interface DropdownOptions {
    multiselect: boolean;
    deselect: boolean;
    dataSource: string;
    dataSourceOptions: { text: string; propertyName: string; };
}
