/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var defaultSendMessage = function (data) { return console.log('no SendMessage'); };
var defaultUIManagment = function (uiManagmentEvent, data) { return console.log('no UIManagment'); };
var defaultNotifications = function (notificationsEvent, data) {
    return console.log('no Notifications');
};
var defaultModules = function (notificationsEvent, data) { return console.log('no modules'); };

var msgRegExpReplace = {
    links: {
        regexp: /href="event:/gim,
        replace: 'data-type="outbound" rel="noopener noreferrer" href="',
    },
    userLinks: {
        regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
        replace: "<a class='request-userlink'$1 data-type='userlink' href='#'>$4</a>",
    },
    newPara: {
        regexp: / \(NEW_PARA\)|\(NEW_PARA\)/gim,
        replace: '',
    },
    newParaButtons: {
        regexp: / \(NEW_PARA\)(.*)|\(NEW_PARA\)(.*)/gim,
        replace: "<span class='para_as_buttons'>$1$2</span>",
    },
    userLinksAsButtons: {
        regexp: /<userlink([^>]*(?!data-request))?(data-request="([^"]+)?")?>(.*?)<\/userlink>/gim,
        replace: "<a class='request-userlink request-userlink_as_button'$1 data-type='userlink' href='#'>$4</a>",
    },
};
var links = msgRegExpReplace.links;
var userLinks = msgRegExpReplace.userLinks;
var userLinksAsButtons = msgRegExpReplace.userLinksAsButtons;
var newPara = msgRegExpReplace.newPara;
var newParaButtons = msgRegExpReplace.newParaButtons;
var msgPrepare = function (text, context) {
    if (/UserLinkAsButton/gim.test(context === null || context === void 0 ? void 0 : context.wcmd_show_mode)) {
        if (/\(NEW_PARA\)/gim.test(context === null || context === void 0 ? void 0 : context.wcmd_show_mode)) {
            return text
                .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
                .replace(newParaButtons === null || newParaButtons === void 0 ? void 0 : newParaButtons.regexp, newParaButtons === null || newParaButtons === void 0 ? void 0 : newParaButtons.replace)
                .replace(userLinks === null || userLinks === void 0 ? void 0 : userLinks.regexp, userLinks === null || userLinks === void 0 ? void 0 : userLinks.replace);
        }
        else {
            return text
                .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
                .replace(newPara === null || newPara === void 0 ? void 0 : newPara.regexp, newPara === null || newPara === void 0 ? void 0 : newPara.replace)
                .replace(userLinksAsButtons === null || userLinksAsButtons === void 0 ? void 0 : userLinksAsButtons.regexp, userLinksAsButtons === null || userLinksAsButtons === void 0 ? void 0 : userLinksAsButtons.replace);
        }
    }
    return text
        .replace(links === null || links === void 0 ? void 0 : links.regexp, links === null || links === void 0 ? void 0 : links.replace)
        .replace(newPara === null || newPara === void 0 ? void 0 : newPara.regexp, newPara === null || newPara === void 0 ? void 0 : newPara.replace)
        .replace(userLinks === null || userLinks === void 0 ? void 0 : userLinks.regexp, userLinks === null || userLinks === void 0 ? void 0 : userLinks.replace);
};

var resultControl = function (module, result) { return __awaiter(void 0, void 0, void 0, function () {
    var queryResult, text, data, _a, data;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                queryResult = result[0].queryResult;
                if (!(queryResult === null || queryResult === void 0 ? void 0 : queryResult.fulfillmentText)) return [3 /*break*/, 3];
                text = msgPrepare(queryResult === null || queryResult === void 0 ? void 0 : queryResult.fulfillmentText);
                data = {
                    text: text ? text : 'что-то не так',
                    sender: 'request',
                    showRate: (_b = result === null || result === void 0 ? void 0 : result.text) === null || _b === void 0 ? void 0 : _b.showRate,
                    type: 'text',
                    module: module.name
                };
                _a = text;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, module.uiDispatcher('sendMessage', data)];
            case 1:
                _a = (_d.sent());
                _d.label = 2;
            case 2:
                _d.label = 3;
            case 3:
                if (!((_c = result === null || result === void 0 ? void 0 : result.text) === null || _c === void 0 ? void 0 : _c.showRate)) return [3 /*break*/, 5];
                data = {
                    uiManagmentEvent: 'showRate',
                    data: true,
                };
                return [4 /*yield*/, module.uiDispatcher('uiManagment', data)];
            case 4:
                _d.sent();
                _d.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); };

var postFetch = function (data, url) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResponse, fetchResult, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(url, {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                        },
                        method: 'POST',
                        body: JSON.stringify({ data: data }),
                    })];
            case 1:
                fetchResponse = _a.sent();
                return [4 /*yield*/, fetchResponse.json()];
            case 2:
                fetchResult = _a.sent();
                return [2 /*return*/, fetchResult.result];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };

var setInfo = function (module, data) {
    var sessionPath = data.sessionPath, sessionId = data.sessionId, projectId = data.projectId;
    if (sessionPath)
        module.info.sessionPath = sessionPath;
    if (sessionId)
        module.info.sessionId = sessionId;
    if (projectId)
        module.info.projectId = projectId;
};
var reset = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        module.moduleDispatcher('chatInit', data);
        return [2 /*return*/];
    });
}); };
var chatInit = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, sessionId, projectId, eventName, infApiUrl, initData, url, result, eventData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = module.info, sessionId = _a.sessionId, projectId = _a.projectId;
                eventName = module.events.ready;
                infApiUrl = module.api.infApiUrl;
                initData = {
                    sessionId: sessionId,
                    projectId: projectId,
                };
                url = infApiUrl + "/ckWebhook/dialogFLow/chatInit";
                return [4 /*yield*/, postFetch(initData, url)];
            case 1:
                result = _b.sent();
                module.moduleDispatcher('setInfo', result);
                eventData = {
                    eventName: eventName,
                    context: data.clientConfig,
                };
                module.moduleDispatcher('chatEvent', eventData);
                return [2 /*return*/];
        }
    });
}); };
var chatRequest = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var sessionPath, infApiUrl, text, context, languageCode, requestData, url, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sessionPath = module.info.sessionPath;
                infApiUrl = module.api.infApiUrl;
                text = data.text, context = data.context;
                languageCode = (context === null || context === void 0 ? void 0 : context.env_sitelang) ? context === null || context === void 0 ? void 0 : context.env_sitelang : 'ru';
                requestData = {
                    sessionPath: sessionPath,
                    text: text,
                    languageCode: languageCode,
                };
                url = infApiUrl + "/ckWebhook/dialogFLow/chatRequest";
                return [4 /*yield*/, postFetch(requestData, url)];
            case 1:
                result = _a.sent();
                resultControl(module, result);
                return [2 /*return*/];
        }
    });
}); };
var chatEvent = function (module, data) { return __awaiter(void 0, void 0, void 0, function () {
    var sessionPath, infApiUrl, eventName, context, languageCode, requestData, url, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sessionPath = module.info.sessionPath;
                infApiUrl = module.api.infApiUrl;
                eventName = data.eventName, context = data.context;
                languageCode = (context === null || context === void 0 ? void 0 : context.env_sitelang) ? context === null || context === void 0 ? void 0 : context.env_sitelang : 'ru';
                requestData = {
                    sessionPath: sessionPath,
                    eventName: eventName,
                    languageCode: languageCode,
                };
                url = infApiUrl + "/ckWebhook/dialogFLow/chatEvent";
                return [4 /*yield*/, postFetch(requestData, url)];
            case 1:
                result = _a.sent();
                resultControl(module, result);
                return [2 /*return*/];
        }
    });
}); };

var INF_API_URL = { "env": { "INF_API_URL": "http://localhost:5000" } }.env.INF_API_URL;
var DialogflowModule = /** @class */ (function () {
    function DialogflowModule(config) {
        var _this = this;
        this.moduleDispatcher = function (event, data) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = event === 'chatInit' && data;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 1:
                        _a = (_f.sent());
                        _f.label = 2;
                    case 2:
                        _b = event === 'chatEvent' && data;
                        if (!_b) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 3:
                        _b = (_f.sent());
                        _f.label = 4;
                    case 4:
                        _c = event === 'chatRequest' && data;
                        if (!_c) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 5:
                        _c = (_f.sent());
                        _f.label = 6;
                    case 6:
                        _d = event === 'setInfo' && data;
                        if (!_d) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 7:
                        _d = (_f.sent());
                        _f.label = 8;
                    case 8:
                        _e = event === 'reset' && data;
                        if (!_e) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.moduleEvents[event](this, data)];
                    case 9:
                        _e = (_f.sent());
                        _f.label = 10;
                    case 10:
                        return [2 /*return*/];
                }
            });
        }); };
        this.uiDispatcher = function (event, data) {
            event === 'sendMessage' && _this.uiEvents[event](data);
            event === 'uiManagment' &&
                _this.uiEvents[event](data.uiManagmentEvent, data.data);
            event === 'notifications' &&
                _this.uiEvents[event](data.notificationEvent, data.data);
            event === 'modules' && _this.uiEvents[event](data.modulesEvent, data.data);
        };
        var info = config.info, moduleEvents = config.moduleEvents, uiEvents = config.uiEvents, api = config.api, events = config.events;
        this.name = 'dialogflow';
        this.info = {
            sessionId: info.sessionId,
            projectId: info.projectId,
            sessionPath: '',
        };
        this.events = {
            ready: (events === null || events === void 0 ? void 0 : events.ready) ? events.ready : 'ready',
        };
        this.api = {
            infApiUrl: (api === null || api === void 0 ? void 0 : api.infApiUrl) || INF_API_URL || '',
        };
        this.uiEvents = {
            sendMessage: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.sendMessage) || defaultSendMessage,
            uiManagment: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.uiManagment) || defaultUIManagment,
            notifications: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.notifications) || defaultNotifications,
            modules: (uiEvents === null || uiEvents === void 0 ? void 0 : uiEvents.modules) || defaultModules,
        };
        this.moduleEvents = {
            setInfo: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.setInfo) || setInfo,
            chatInit: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatInit) || chatInit,
            chatEvent: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatEvent) || chatEvent,
            chatRequest: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.chatRequest) || chatRequest,
            reset: (moduleEvents === null || moduleEvents === void 0 ? void 0 : moduleEvents.reset) || reset,
        };
    }
    return DialogflowModule;
}());

var ckModuleInit = function (config) { return new DialogflowModule(config); };

export default ckModuleInit;
//# sourceMappingURL=index.es.js.map
