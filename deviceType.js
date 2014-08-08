var device = (window.device || {});

device = (function() {

	var userAgent = navigator.userAgent.toLowerCase(),
		docElement = window.document.documentElement;

	var lookup = {
		iphone: function() {return _is('iphone'); },
		ipad: function() {return _is('ipad'); },
		ipod: function() {return _is('ipod'); },
		ios: function() {return this.iphone() || this.ipad() || this.ipod(); },
		facebookBrowser: function() {return _is('facebook'); },
		android: function() {return _is('android'); },
		androidPhone: function() {return _is('mobile') && this.android(); },
		androidTablet: function() {return !_is('mobile') && this.android(); },
		windows: function() {return _is('windows'); },
		windowsPhone: function() {return _is('phone') && this.windows(); },
		windowsTablet: function() {return _is('touch') && this.windows(); },
		firefoxOS: function() {return _is('; rv:') || _is('mobile;') || _('tablet;'); },
		firefoxOsPhone: function() {return _is('mobile') && this.firefoxOS(); },
		firefoxOsTablet: function() {return _is('tablet') && this.firefoxOS(); },
		phone: function() {return this.iphone() || this.ipod() || this.androidPhone() || this.windowsPhone() || this.firefoxOsPhone(); },
		tablet: function() {return this.ipad() || this.androidTablet() || this.windowsTablet() || this.firefoxOsTablet(); },
		desktop: function() {return !this.mobile() && !this.tablet(); }
	};

	function _platform() {
		
		if (lookup.ios()) {
			_addClass('ios');
			return 'ios';
			
		} else if (lookup.android()) {
			_addClass('android');
			return 'android';
			
		} else if (lookup.windows()) {
			_addClass('windows');
			return 'windows';
			
		} else if (lookup.firefoxOS()) {
			_addClass('fxOS');
			return 'firefox';
		}
		
		return false;
	}

	function _type() {
		if (lookup.phone()) {
			_addClass('phone');
			return 'phone';
			
		} else if (lookup.tablet()) {
			_addClass('tablet');
			return 'tablet';
			
		} else if (lookup.desktop()) {
			_addClass('desktop');
			return 'desktop';
		}
		
		return false;
	}

	function _orientation() {
		return ((window.innerHeight / window.innerWidth) > 1) ? 'portrait' : 'landscape';
	}

	function _is(needle) {
		var regx = new RegExp(needle,'g');
		return regx.test(userAgent);
	}
	
	function _addClass(className) {
		docElement.classList.add(className);
	}
	
	function _removeClass(className) {
		docElement.classList.remove(className);
	}

	return {
		platform: _platform(),
		type: _type(),
		orientation: _orientation(),
		is: function(needle) {
			return lookup[needle]();
		}
	};

})();