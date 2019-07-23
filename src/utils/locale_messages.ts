import { NewCustomerForm, NewProductForm } from '../models';

const msgs = {
  en: {
    chooseProfile: 'Please choose a profile to continue...',
    chooseForm: 'Please choose a form to continue...',
    welcome: 'Welcome, {nickname}!',
    newCustomer: 'New Customer',
    newProduct: 'New Product',
    save: 'Save',
    reset: 'Reset',
    fieldNames: {
      [NewCustomerForm.name]: {
        firstName: 'First Name',
        lastName: 'Last Name',
        address: 'Address',
        phoneNum: 'Phone Number',
        email: 'Email',
      },
      [NewProductForm.name]: {
        name: 'Name',
        description: 'Description',
        productCode: 'Product Code',
        price: 'Price',
      },
    },
    errors: {
      required: ':attribute is a required field.',
      digits: ':attribute must be :digits digits.',
      email: ':attribute must be in a valid email format.',
      alpha: ':attribute must contains only alphabets.',
      between: {
        string: 'Length of :attribute must be between :min and :max chars.',
      },
      numeric: ':attribute must be a number.',
    },
  },
  th: {
    chooseProfile: 'โปรดเลือกโปรไฟล์เพื่อล็อคอิน...',
    chooseForm: 'โปรดเลือกฟอร์มที่คุณต้องการ...',
    welcome: 'ยินดีต้อนรับ {nickname}!',
    newCustomer: 'สร้าง ลูกค้า',
    newProduct: 'สร้าง สินค้า',
    save: 'เซฟ',
    reset: 'รีเซ็ท',
    fieldNames: {
      [NewCustomerForm.name]: {
        firstName: 'ชื่อ',
        lastName: 'นามสกุล',
        address: 'ที่อยู่',
        phoneNum: 'เบอร์โทร',
        email: 'อีเมลล์',
      },
      [NewProductForm.name]: {
        name: 'ชื่อสินค้า',
        description: 'รายละเอียด',
        productCode: 'รหัสสินค้า',
        price: 'ราคา',
      },
    },
    errors: {
      required: ':attribute เป็นข้อมูลที่ต้องกรอก',
      digits: ':attribute ต้องเป็นตัวเลขและมีความยาว :digits ตัวอักษร',
      email: 'กรุณากรอก :attribute ในรูปแบบอีเมลล์ที่ถูกต้อง',
      alpha: 'กรุณากรอก :attribute ด้วยตัวอักษรอังกฤษเท่านั้น',
      between: {
        string: ':attribute ต้องมีความยาวตั้งแต่ :min ถึง :max ตัวอักษร',
      },
      numeric: ':attribute ต้องมีค่าเป็นตัวเลข',
    },
  },
};

export { msgs };
