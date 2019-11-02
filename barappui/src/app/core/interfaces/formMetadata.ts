import { FormMetadataInput } from './formMetadataInput';

export interface FormMetadata {
    name: string;
    entityName?: string;
    inputs: FormMetadataInput[];
}
