import Widget from './Widget';
const supportedAPI = ['init', 'message'];

function app(window) {
  console.log('JS-Widget starting');

  let defaultConfigurations = {};

  window[window['MasivChatBotWidget']] = new Widget();

  window.mcbwAsyncInit();

  // let queue = globalObject.q;
  // if (queue) {
  //   queue.forEach(function (item) {
  //     if (item[0].toLowerCase() === 'init') {
  //       defaultConfigurations = extendObjects(defaultConfigurations, item[1]);
  //       console.log('JS-Widget started', defaultConfigurations);
  //     } else {
  //       apiHandler(item[0], item[1]);
  //     }
  //   })
  // }
}

// function apiHandler(api, params) {
//   if (!api) throw Error('API method required');

//   api = api.toLowerCase();

//   if (supportedAPI.indexOf(api) === -1) throw new Error(`Method ${api} is not supported`);

//   console.log(`Handling API call ${api}`, params);

//   switch (api) {
//     case 'message':
//       alert(`Hello from the widget, ${params}`);
//       break;
//     default:
//       console.warn(`No handler defined for ${api}`);
//   }
// }
// function extendObjects(a, b) {
//   for (let key in b) {
//     if (b.hasOwnProperty(key)) {
//       a[key] = b[key];
//     }
//   }

//   return a;
// }

app(window);