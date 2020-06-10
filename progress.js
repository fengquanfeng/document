//导入文件管理模块
const fs = require('fs');

//创建异步自进程，用于执行git log命令
const exec = require('child_process').exec

//设定执行命令，输出json格式的log信息
const command = `git log --date=format:%Y-%m-%d --pretty=format:{"'author'":"'%aN'","'date'":"'%ad'","'message'":"'%s'"}`


//执行命名，输出progress.json
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`error:${error}`);
    console.error(`stderr:${stderr}`);
  } else {
    let _str = stdout.replace(/\'/g, "\"").replace(/\n/g, ",")
    fs.writeFile('progress.json', '[' + _str + ']', (error) => {
      if (error) {
        console.error(`Error:${error}`);
      }
    })
  }
})