async function app(window) {
  console.log('JS-Widget starting');

  const { default: Widget} = await import('./Widget');

  window[window['MasivChatBotWidget']] = new Widget();
  window.mcbwAsyncInit();

  // Other way to import a module with lazy-load
  // import('./Widget').then(module => {
  //   const Widget = module.default;

  //   window[window['MasivChatBotWidget']] = new Widget();

  //   window.mcbwAsyncInit();
  // });
}

app(window);