import os
"""
 * 游戏命名: gamename_cartpath.html
 * 博客命名: title_maincontent_tag_time
"""
#file=open('post','w')
file2=open('game','w')
for i in os.listdir("games"):
	if("html" in i):
		file2.write(i+'\n')
file2.close()
