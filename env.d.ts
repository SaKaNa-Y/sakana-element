/// <reference types="vite/client" />

// CSS Houdini Paint API
interface PaintWorklet {
  addModule(moduleURL: string): Promise<void>;
}

declare namespace CSS {
  var paintWorklet: PaintWorklet;
}

//定义全局变量
declare const PROD: boolean; //生产环境
declare const DEV: boolean; //开发环境
declare const TEST: boolean; //测试环境
