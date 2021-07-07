export default class Widget {
  constructor() {
    this.configurations = {};
  }
  initWidget(customConf = {}) {
    this.configurations = {...this.configurations, ...customConf};
    
    console.log('Widget initialized');
  }
  showMessage(message = 'Hello world!') {
    alert(message);
  }
}