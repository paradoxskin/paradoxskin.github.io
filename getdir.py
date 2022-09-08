import os
file=open('info','w')
for i in os.listdir():
	file.write(i+'\n')
file.close()
