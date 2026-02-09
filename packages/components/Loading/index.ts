import type { App } from 'vue';
import { vLoading } from './directive';
import { Loading } from './service';

export const PxLoading = {
  name: 'PxLoading',
  //install插件安装，使用app.use(PxLoading)安装插件
  install(app: App) {
    app.directive('loading', vLoading); //注册指令。v-loading指令，loading是指令的名称 v-loading
    app.config.globalProperties.$loading = Loading; //注册服务。$loading服务
  },
  //directive为了使用app.directive('loading', vLoading)注册指令
  directive: vLoading, //指令
  //service为了使用app.config.globalProperties.$loading = Loading注册服务
  service: Loading, //服务
};

export default PxLoading;

export { vLoading, vLoading as PxLoadingDirective, Loading as PxLoadingService };

export * from './types';
