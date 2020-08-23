self.addEventListener('message', function (message) {
    // 1. 传递file
    let file = message.data
    // 2. 使用reader 进行字节分析
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        // 解析后的数据
        self.postMessage(data);
    };
    // 3. 加载  --》 此处会产生io
    reader.readAsText(file)
}, false);