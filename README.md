# learn-hooks

React Hooks demos.

## Hooks 使用规则

Hooks 是 React16.8 新增的特性：

1. 只能在顶层调用 Hooks（理解：不能再循环（for）、条件（if）语句以及嵌套方法（function）中调用 Hooks）;
2. 只能在 React Function 中调用 Hooks，不要再普通的 JavaScript Function 中调用 Hooks（理解：在 React 函数组件中调用 Hooks 以及在自定义 Hooks 中调用 Hooks）

**可以使用[eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)自动执行以上规则**

## eslint-plugin-react-hooks

```bash
# install
npm install eslint-plugin-react-hooks --save-dev

# use
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
  }
}
```
