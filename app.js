'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async willReady() {
    // 所有的插件都已启动完毕，但是应用整体还未 ready
    // 可以做一些数据初始化等操作，这些操作成功才会启动应用
    await this.app.model.sync({ focus: true });
  }
}
module.exports = AppBootHook;
