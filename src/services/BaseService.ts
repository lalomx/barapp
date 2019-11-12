import { Validations } from "../interfaces/Validations";
import { Validators } from "../interfaces/Validators";
import { ValidationError } from "../interfaces/Error";

export abstract class BaseService {

  protected readonly API_BASE = '/api/v1/';

  protected validateEntity(entity: any, validations: Validations[]) {
    const errors: ValidationError[] = [];
    validations.forEach(v => {
      const prop = entity[v.propertyName];
      if (v.validation === Validators.NotNull) {
        if (!!prop) {
          return;
        }
        errors.push({ msg: `El campo [${v.propertyName}] no debe de estar vacio`, param: v.propertyName });
      } else if (v.validation === Validators.MoreThanZero) {
        if (prop > 0) {
          return;
        }
        errors.push({ msg: `El campo [${v.propertyName}] no debe ser mayor que 0`, param: v.propertyName });
      }
    });

    return errors;
  }
}