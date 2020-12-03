// 布局型组件 【左面板】
export const layoutComponents = [
  {
    layout: 'rowFormItem',
    name: '行容器',
    icon: 'icon-row_container',
    config: {
      children: [],
      tagIcon: 'row',
      label: '行容器',
      layoutTree: true,
      span: 24
    },
    type: 'default',
    justify: 'start',
    align: 'top'
  }
];

// 表单属性【右面板】
export const formConfig = {
  name: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'right',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 15,
  disabled: false,
  span: 24,
  formBtns: true
};
