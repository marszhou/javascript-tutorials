# Lesson 14

## localStorage

* [localStorage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
* [localStorage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
* [localStorage.removeItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem)

## JSON

* [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
* [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

## AJAX = Asynchronous JavaScript And XML

### XMLHttpRequest

* [文档](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* 延伸阅读: [XMLHttpRequest 入门教程](https://developer.mozilla.org/zh-CN/docs/AJAX/Getting_Started)

创建xhr

```js
// 兼容老浏览器的写法，现在应该不需要如此判断了
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest(); // <---- 现在直接执行这一行即可
} else if (window.ActiveXObject) { // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

xhr的ready state含义

* 0 (uninitialized) or (request not initialized)
* 1 (loading) or (server connection established)
* 2 (loaded) or (request received)
* 3 (interactive) or (processing request)
* 4 (complete) or (request finished and response is ready)

例子：发起请求，并alert返回结果 [source](./alert1/index.html)

```html
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>

```

例子：发送数据并返回 [source](./alert2/index.html)

```html
<input type='text' id='name'/>
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', () => makeRequest('./test.php', document.getElementById('name').value));

  function makeRequest(url, username) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('username=' + encodeURIComponent(username));
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>

```

更多例子:

* [服务器加法](./add/)
* [使用jQuery阅读小说](./book/)

### window.fetch

* https://davidwalsh.name/fetch
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

```js
function fetchWeather(loc) {
  return window.fetch('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition.temp%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+loc+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
  .then(resp => {
    return resp.json()
  })
  .then(j => {
    return +((j.query.results.channel.item.condition.temp-32)/(9/5)).toFixed(1)
  })
}
```


## 其他资源
* [http请求的第三方类库 superagent](https://github.com/visionmedia/superagent)
* [http请求的第三方类库 axios](https://github.com/mzabriskie/axios)
* [教程 xhr2](https://www.html5rocks.com/en/tutorials/file/xhr2/)





