import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Form, FormItem, Input, Button, Menu, MenuItem, Submenu, Dropdown, DropdownMenu, DropdownItem, Scrollbar, Card, Breadcrumb, BreadcrumbItem, Table, TableColumn, Dialog, Row, Col, Tree, Transfer, CheckboxGroup, Checkbox, Pagination } from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Scrollbar)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(Tree)
Vue.use(Transfer)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Pagination)

Vue.prototype.$ELEMENT = { size: 'mini' };