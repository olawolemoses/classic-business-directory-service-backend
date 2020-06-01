    var Ziggy = {
        namedRoutes: {"login":{"uri":"login","methods":["GET","HEAD"],"domain":null},"logout":{"uri":"logout","methods":["POST"],"domain":null},"register":{"uri":"register","methods":["GET","HEAD"],"domain":null},"password.request":{"uri":"password\/reset","methods":["GET","HEAD"],"domain":null},"password.email":{"uri":"password\/email","methods":["POST"],"domain":null},"password.reset":{"uri":"password\/reset\/{token}","methods":["GET","HEAD"],"domain":null},"password.update":{"uri":"password\/reset","methods":["POST"],"domain":null},"password.confirm":{"uri":"password\/confirm","methods":["GET","HEAD"],"domain":null},"home":{"uri":"home","methods":["GET","HEAD"],"domain":null},"search":{"uri":"search","methods":["POST"],"domain":null},"categories.update":{"uri":"categories\/{category}\/edit","methods":["POST"],"domain":null},"categories.store":{"uri":"categories","methods":["POST"],"domain":null},"categories":{"uri":"categories","methods":["GET","HEAD"],"domain":null},"categories.delete":{"uri":"categories\/{category}\/delete","methods":["DELETE"],"domain":null},"business":{"uri":"business","methods":["GET","HEAD"],"domain":null},"business.addCategory":{"uri":"business\/{business}\/add\/{category}\/category","methods":["POST"],"domain":null},"business.show":{"uri":"business\/{business}\/show","methods":["GET","HEAD"],"domain":null},"business.activate":{"uri":"business\/{business}\/activate","methods":["POST"],"domain":null},"business.update":{"uri":"business\/{business}\/edit","methods":["POST"],"domain":null},"business.store":{"uri":"business","methods":["POST"],"domain":null},"business.delete":{"uri":"business\/{business}\/delete","methods":["DELETE"],"domain":null}},
        baseUrl: 'http://localhost/',
        baseProtocol: 'http',
        baseDomain: 'localhost',
        basePort: false,
        defaultParameters: []
    };

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
