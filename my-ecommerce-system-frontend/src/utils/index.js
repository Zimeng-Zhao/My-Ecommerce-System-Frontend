//后续utils中可能有许多工具模块，这里作为中转导出，后面哪里需要都从index.js里面拿
//其他地方同意写 import { request } from "@utils"; 就可以导入需要的工具了
import { request } from "./request";

export {request}