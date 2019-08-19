# vsCode代码块

vscode可能是最便捷的编辑器了，今天来介绍下他一个很有用的功能。我们用vscode的应该都会用过对应语言的snipper，输入几个字母会联想出一大段的代码，牛逼吧

> 第一步

    trol + shift + p 调出面板，输入snippets

> 第二步、选择对应的编程语言

> 第三步、输入snippet代码:

```
"Print to html": {
			"prefix": "lg",   //编程的时候代码块会匹配这个
			"body": [
				"console.log('$1');",   //代码块内容  //$1光标首次出现的位置,
				"$2"  //$2光标第二次出现的位置,一只$3,$4下去
			],
			"description": "Log output to console"  //一点描述
		}
```

