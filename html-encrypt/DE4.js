document.addEventListener("DOMContentLoaded", function() {
  var encryptedText = document.body.textContent.trim(); // 获取<body>标签中的加密字符串

  // 异步加载外部密钥文件
  var keyScript = document.createElement("script");
  keyScript.src = 'webkey.js'; // 將網址換成外部網址
  keyScript.onload = function() {
    // 使用外部載入的密鑰進行解密
    var decryptedText = CryptoJS.AES.decrypt(encryptedText, secret_key).toString(CryptoJS.enc.Utf8);

    // 用解密后的内容替换整个文档的HTML内容
    document.documentElement.innerHTML = decryptedText;

    // 获取并执行所有解密后的<script>标签中的JavaScript代码
    var decryptedScripts = document.querySelectorAll("script");
    decryptedScripts.forEach(function(script) {
      var newScript = document.createElement("script");
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.body.appendChild(newScript);
    });
  };
  document.body.appendChild(keyScript);
});
