declare module 'string-format-obj' {

  function format(template: string, obj: any): string;
  function format(template: string): (obj: any) => string;

  export = format;
}
