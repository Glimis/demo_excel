前端 与 excel

## read
### 1. 前端读取文件  
index1.html

a. 文件必须手动上传 --》 安全沙箱
b. 读取文件依赖FileReader接口  --》 html5,io，worker
c. 接口分字节与字符 
d. 字节一定有字节规则 --》 每个字节如何解析
e. 字符一定有编码问题 --》 编码是字节规则的dsl/简化 [简化一定存在分层问题]

### 2. FileReader api
index2.html

readAsArrayBuffer ： 用于自定义序列化
readAsBinaryString ：废弃
readAsText ： 字符流
readAsDataURL ： base64  

### 3. reader 会产生 io
index3.html

当遇见复杂计算和大体积文件时,会产生卡顿现象

### 4. worker
index4.html

使用worker读取与解析文件

### 5. 读取压缩包
a. 读取整个压缩包的字节码  --》 参考1
b. 获取某个文件的字节码范围  --》 参考压缩算法
c. 解码  --》 参考压缩算法

### 6. 读取excel
a. 读取整个excel的字节码
b. 获取sheet的字节码范围
c. 解码 [指解压缩] 
d. 对象转换

特指压缩包版,对于二进制,需要按字节处理


js通用包解决方案：

### jszip
1. 分析压缩包结构
2. 提供解压/压缩算法

### xlsx
1. 将xml结构转换为json结构
2. 将json结构,写入xml
3. 处理兼容性


## write
### 1. dataURL，a与download
a：声明式标签
download：下载名
dataURL：下载内容


### 2. 指令式封装
使用createObjectURL 封装下载

下载外部资源,前端修改名称
