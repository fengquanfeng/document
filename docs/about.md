# 关于本站

git策略如下  
master分支用于部署  
dev分支用于开发  
各位小伙伴在本地创建自己的分支，开发完成后合并到dev  
需要发布的时候，将dev分支合并到master后发布  

---
大家先创建远程的dev分支到本地。可以试试 git checkout -b dev origin/dev

然后在本地创建自己的分支，在这个自己的分支上开发和玩耍，开发完了后合并到dev，然后将dev推送到github上

---
如果你对某个页面内容有更新或者修改，请按如下格式在当前md文件的最后添加贡献者
如果有自己的博客或者站点就在小括号内添加链接，没有就直接写上名称昵称
::: tip 贡献者
[贡献者名称1](/about) [贡献者名称2](/about) 贡献者名称3
:::
