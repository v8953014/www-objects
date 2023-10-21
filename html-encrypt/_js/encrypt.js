    // 在這個函數中，我們使用AES加密算法對HTML內容進行加密
    function encryptHTML(secretKey) {
      var inputHTML = document.getElementById("inputHTML").value;
      var headStart = inputHTML.indexOf("<head>") + 6;
      var bodyEnd = inputHTML.indexOf("</body>");
      // 在body的起始位置插入script，禁止右鍵、禁止F1~F12快捷鍵、禁止[開發人員工具]視窗
      var scriptToAdd = '\n<' + 'script>' + 'document.addEventListener("contextmenu", e => e.preventDefault());document.addEventListener("keydown", e => {if (e.ctrlKey || e.shiftKey || e.altKey || (e.keyCode >= 112 && e.keyCode <= 123)) {e.preventDefault();}});setInterval(() => {const t = 160;if (window.outerWidth - window.innerWidth > t || window.outerHeight - window.innerHeight > t) {window.location.replace("http://www.example.com/404.html");}}, 300);' + '</script' + '>\n';
      var contentToEncrypt = inputHTML.slice(headStart, bodyEnd);
      contentToEncrypt = contentToEncrypt.slice(0, 1) + scriptToAdd + contentToEncrypt.slice(1);
      var encryptedContent = CryptoJS.AES.encrypt(contentToEncrypt, secretKey).toString();
      // 額外的加密腳本
      var additionalScripts = '\n<' + 'script src="https://v8953014.github.io/www-objects/html-encrypt/_js/encrypt.js"></script' + '>' + '\n<' + 'script src="https://v8953014.github.io/www-objects/html-encrypt/_js/DE4.js"></script' + '>';
      // 構建加密後的HTML碼
      var encryptedHTML = '<!DOCTYPE html>\n<html lang="zh-tw">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">' + encryptedContent + '</body>' + additionalScripts + '\n</html>';
      // 將加密後的HTML顯示在文本區域
      document.getElementById("encryptedHTML").value = encryptedHTML;

        console.log(secret_key);
    }
