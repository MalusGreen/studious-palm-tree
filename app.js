const MDCSelect = mdc.select.MDCSelect;
const MDCTabBar = mdc.tabBar.MDCTabBar;
const select = new MDCSelect(document.querySelector('.mdc-select'));

select.listen('MDCSelect:change', () => {
  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
});

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
