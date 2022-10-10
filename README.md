

# 🚀 CommanderJS To Documentation

This is a simple tool to generate documentation from your commanderjs commands.

![CommanderJS to documentation](./assets/preview.png)

## CommanderJS To Documentation Usage

```js
const commander2documentation = require('@kozmonos/commander2documentation');

//-------------------------------------
// create program

const { Command,program } = require('commander');
const actions = require('./actions');

program
	.description('Kozmonos developer cli tool')
	.version('1.0.0');

program
	.command('test')
	.description('test command')
	.action(actions.test)


const subCommand=new Command('sub')

subCommand
	.command('test2')
	.description('test command 2')
	.option('-o, --out <path>')
	.action(actions.test2)

//-------------------------------------
//program to doc

const app=new commander2documentation(program)
const response=app.build({
	bin: "kozmonos",
	output: "./dist"
})
```
## Support Us

[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/kozmonos)
[![Buy Me A Coffe](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/kozmonos)
[![Kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/kozmonos)
[![Liberapay](https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)](https://liberapay.com/kozmonos/donate)
[![Github Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/Kozmonos)
![Open Collective](https://img.shields.io/badge/OpenCollective-1F87FF?style=for-the-badge&logo=OpenCollective&logoColor=white)

## Communicate

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/kozmonos)
[![Mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:opensource@kozmonos.com)