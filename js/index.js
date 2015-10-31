(function(){
    var bitcore = require('bitcore');
    var HDPrivateKey = bitcore.HDPrivateKey;
	
	var DOM = {};
	DOM.key = $('#key');
	DOM.status = $('#status');
	DOM.addresses = $('#addresses');
	DOM.btnScan = $('#btnScan');
	
	function init() {
		DOM.btnScan.on('click', scan);
	}
	
	function scan() {
		var key = new HDPrivateKey(DOM.key.val());
		var derived = key.derive(1).derive(2, true);
		var address = derived.privateKey.toAddress();
		alert(address);
	}
	
	init();
})();