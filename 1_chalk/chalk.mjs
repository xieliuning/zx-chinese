/* 
  1. 单色
  2. 背景色
  3. 下划线
  4. 斜体
  5. 反向色
  6. 删除线
  7. 加粗
  支持 rgb ｜ hex

  1. 模版字符串
  2. 定义方法
*/

// 单色
console.log(chalk.blue('Hello world!'))
console.log(chalk.blue('Hello', 'World!', '谢', '柳', '宁'))

// 组合颜色
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// 背景颜色
console.log(chalk.blue.bgRed.bold('Hello world!'))

// 下划线
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))

// 斜体
console.log(chalk.italic('italic'))

// 反向色
console.log(chalk.inverse('inverse'))

// 删除线
console.log(chalk.strikethrough('strikethrough'))

// 组合
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
))

// rgb
console.log(chalk.rgb(123, 45, 67).underline('这个是下划线啦'))
console.log(chalk.bgRgb(15, 100, 204)('蟹柳蟹柳蟹柳!'))

// hex
console.log(chalk.hex('#DEADED').bold('Bold gray!'))

// 模版字符串
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)

// 定义方法
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');
console.log(error('Error!'));
console.log(warning('Warning!'));
