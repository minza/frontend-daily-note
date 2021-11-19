## npm install 的时候出现报错
```
found 31 vulnerabilities (20 moderate, 10 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details`
```

## 原因
这是因为npm的6版本可以检查依赖中的漏洞，可以通过命令npm audit fix 自动安装有更新的有漏洞的依赖

## 解决办法
一般可以npm audit fix解决，实在不行可以npm audit fix --force,再加上npm cache clean --force来解决
