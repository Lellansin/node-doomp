# node-doomp

I'v been doing scripts which cost long time, and I can't notice them immediately. So I wrote this.

*A doomp voice for alarm.*

Usage:

```javascript
var alarm = require('doomp')

// ... your code ...

// while process exiting
process.on('exit', function () {

  // you'll hear DOOMP-DOOMP-DOOMP 
  alarm(3)
})
```

PS: max count is 5.

## install

`npm install doomp`

## for scripts

`npm install doomp -g`

Using

```shell
sh some_time_script.sh && doomp 3
```
