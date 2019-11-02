export interface PropertyChangedEventArgs {
    propertyName: string;
    currentValue: string | number;
    previousValue: string | number;
    entity: any;
}
