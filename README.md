# deviceType.js

Simple user agent sniffer to determine the device type (phone, tablet, or desktop) and the device platform (iOS, android, windows, or firefox OS), as well as the device orientation (portrait or landscape).

Written using vanilla JavaScript and is *not* dependant on any third-party libraries.

### Usage

```js
// Simply grab the object once the script runs...
window.device;

// ...and you'll get something like this:
{
	orientation: "portrait",
	platform: "ios",
	type: "phone",
	is: function(needle)
}

```

If you need a little more granularity, use the `device.is()` method. E.g. iphone vs. ipod.

```js
// Assuming the user's device is an iPhone:
device.is('iphone');
> true

device.is('ipod');
> false
```

### Available `.is()` method values

```
iphone
ipad
ipod
ios
facebookBrowser
android
androidPhone
androidTablet
windows
windowsPhone
windowsTablet
firefoxOS
firefoxOsPhone
firefoxOsTablet
phone
tablet
desktop
```