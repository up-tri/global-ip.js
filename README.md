# global-ip

the simple wrapper of [ip-api.com](https://ip-api.com/)

```js
const GlobalIP = require("./../src");

const gip = new GlobalIP();
gip
  .execute()
  .then((ip) => {
    console.log(ip);
  })
  .catch((errorCode) => {
    switch (errorCode) {
      case gip.CANNOT_FETCH_SELF_IP:
        console.log("cannot fetch ip");
        break;
      case gip.CANNOT_CONNECT_INTERNET:
        console.log("cannot connect internet");
        break;
      case gip.SOME_ERROR_HAPPENED:
        console.log("unhandled error!");
        break;
    }
  });
```

## developer

[up-tri](https://github.com/up-tri)
