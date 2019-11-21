import { FormEditor } from './FormEditor';
import { DropdownOptions } from '../../shared/interfaces/form/dropDownOptions';

export interface FormMetadataInput {
    caption: string;
    propertyName: string;
    editor: FormEditor;
    visible: boolean;
    required: boolean;
    readonly: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
    format?: string;
    dropdownOptions?: DropdownOptions;
}
