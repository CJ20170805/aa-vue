// 设置form表单
export const setFormData = formItems => {
  let form = {};
  for (let key in formItems) {
    form[key] = "";
  }
  return form;
};

// 设置规则
export const setRules = (formItems, validator) => {
  let rules = {};
  for (let key in formItems) {
    rules[key] = formItems[key]["rules"];
    if (validator && validator.hasOwnProperty(key)) {
      rules[key].push({ validator: validator[key], trigger: "blur" });
    }
  }
  return rules;
};

export const checkForm = (that, ref) => {
  let valid
  that.$refs[ref].validate(va => {
    valid = va
  })
  return valid
}

/**
 * 过滤掉空的值
 * @param {Object} form -- 需要提交的form表单
 */
export const filterForm = (form) => {
  let param = {}
  for(let key in form){
    if(form[key]) param[key] = form[key]
  }
  return param
}