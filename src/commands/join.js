const _0x2e18b9=_0x57ee;(function(_0x1f9337,_0xe5f54a){const _0x587617=_0x57ee,_0x2f9450=_0x1f9337();while(!![]){try{const _0x3f05a8=-parseInt(_0x587617(0x1a7))/0x1*(-parseInt(_0x587617(0x19d))/0x2)+parseInt(_0x587617(0x1a2))/0x3*(-parseInt(_0x587617(0x199))/0x4)+-parseInt(_0x587617(0x196))/0x5+parseInt(_0x587617(0x1a8))/0x6*(parseInt(_0x587617(0x1a4))/0x7)+-parseInt(_0x587617(0x1a3))/0x8*(parseInt(_0x587617(0x19e))/0x9)+parseInt(_0x587617(0x18f))/0xa+parseInt(_0x587617(0x194))/0xb;if(_0x3f05a8===_0xe5f54a)break;else _0x2f9450['push'](_0x2f9450['shift']());}catch(_0x29769e){_0x2f9450['push'](_0x2f9450['shift']());}}}(_0x328c,0xe3d46));const fs=require('fs'),configs=require(_0x2e18b9(0x18d)),openSettings=()=>{const _0x3916d7=_0x2e18b9;return JSON[_0x3916d7(0x195)](fs[_0x3916d7(0x19c)](configs[_0x3916d7(0x1a5)],{'encoding':_0x3916d7(0x19a)}));};function _0x57ee(_0x5c5da9,_0x55ecc7){const _0x328c0c=_0x328c();return _0x57ee=function(_0x57eee4,_0xfe39a5){_0x57eee4=_0x57eee4-0x18d;let _0x2ed0d6=_0x328c0c[_0x57eee4];return _0x2ed0d6;},_0x57ee(_0x5c5da9,_0x55ecc7);}function _0x328c(){const _0x4980f5=['sendTypingIndicator','writeFileSync','211172yEOuIp','utf8','threads','readFileSync','957978dYiiOX','36lkciNe','stringify','includes','log','15OgIetB','1789744QzULZu','420840NjooVE','APP_SETTINGS_LIST_FILE','threadID','2WlBnQf','156KsYYYr','../../configs','push','8919830LIzGFJ','prefix','🚧\x20MantoBot\x20is\x20already\x20in\x20this\x20conversation.','defaultSettings','APP_THREAD_WHITELIST_FILE','2731399jNtrbd','parse','7846815uhUgzq'];_0x328c=function(){return _0x4980f5;};return _0x328c();}module['exports']=async(_0x52e79f,_0x5a7a65,_0x2d0b79,_0x960488)=>{const _0x42c191=_0x2e18b9;let _0x49243f=openSettings(),_0x3df855=_0x49243f[_0x42c191(0x19b)][_0x5a7a65['threadID']]||_0x49243f[_0x42c191(0x192)],_0x2e1b44=JSON[_0x42c191(0x195)](fs['readFileSync'](configs[_0x42c191(0x193)],{'encoding':_0x42c191(0x19a)})),_0x685e6=![];!_0x2e1b44[_0x42c191(0x19b)][_0x42c191(0x1a0)](_0x5a7a65['threadID'])&&(_0x2e1b44['threads'][_0x42c191(0x18e)](_0x5a7a65[_0x42c191(0x1a6)]),fs[_0x42c191(0x198)](configs[_0x42c191(0x193)],JSON[_0x42c191(0x19f)](_0x2e1b44,undefined,0x4),{'encoding':_0x42c191(0x19a)}),_0x685e6=!![]);let _0x112f71=_0x2d0b79[_0x42c191(0x197)](_0x5a7a65[_0x42c191(0x1a6)],_0x355269=>{const _0x2c1870=_0x42c191;if(_0x355269)return console[_0x2c1870(0x1a1)](_0x355269);let _0x10a655=_0x685e6?'🎉\x20MantoBot\x20joined\x20the\x20conversation!\x0aType\x20'+_0x3df855[_0x2c1870(0x190)]+'help\x20—\x20to\x20see\x20the\x20list\x20of\x20available\x20commands!':_0x2c1870(0x191);_0x2d0b79['sendMessage'](_0x10a655,_0x5a7a65[_0x2c1870(0x1a6)],_0x5a7a65['messageID']),_0x112f71();});};