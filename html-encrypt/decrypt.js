    // 解密HTML
    function decryptHTML() {
      var inputHTML = document.getElementById("encryptedHTML").value;
      var metaViewportIndex = inputHTML.indexOf('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      var headStart = metaViewportIndex + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'.length;

      var bodyEnd = inputHTML.indexOf("</body>");
      var encryptedContent = inputHTML.slice(headStart, bodyEnd);

      // 解密密文時使用從外部載入的實際密鑰
      var decryptedContent = CryptoJS.AES.decrypt(encryptedContent, secret_key).toString(CryptoJS.enc.Utf8);

      // 移除特定腳本
      decryptedContent = decryptedContent.replace(/\n?<script>.+<\/script>\n?/g, '');

      // 重新構建解密後的HTML碼，插入必要的meta標籤
      var decryptedHTML = '<!DOCTYPE html>\n<html lang="zh-tw">\n<head>' + decryptedContent + '</body>\n</html>';

      // 將解密後的HTML顯示在文本區域
      document.getElementById("decryptedHTML").value = decryptedHTML;
    }
