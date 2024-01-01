import { defineRule } from "vee-validate";

export default function applyRule(){
  defineRule('required', value=> {
    if(!value || !value.length){
      return '이 항목은 필수로 입력해주세요.'
    }
  
    return true
  })
  
  defineRule('email', value=> {
    if (!value || !value.length) {
      return true;
    }
    // Check if email
    if (!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(value)) {
      return '이메일 형식이 아닙니다.';
    }
    return true;
  })
}

