export function Validation(type: string, value1: any, value2?: any) {
  if (type === 'required') {
    if (value1 == null || value1 == undefined || value1 === '') return true;
    else return false;
  } else if (type === 'requiredEmail') {
    if (value1) {
      let pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (pattern.test(value1)) {
        return false;
      } else return true;
    } else return true;
  } else if (type === 'password') {
    if (value1) {
      let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
      if (pattern.test(value1)) {
        return false;
      } else {
        return true;
      }
    } else return true;
  } else if (type === 'passwordCompare') {
    if (value1 && value2) {
      if (value1 === value2) return false;
      else return true;
    } else return true;
  }
}
