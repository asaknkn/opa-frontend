import { __assign, __awaiter, __generator } from "tslib";
import { mount } from '@vue/test-utils';
import CreateCode from '@/components/CreateCode.vue';
import flushPromises from "flush-promises";
import axios from "axios";
jest.mock("axios");
var mockedAxios = axios;
var factory = function (values) {
    if (values === void 0) { values = {}; }
    return mount(CreateCode, {
        data: function () {
            return __assign({}, values);
        }
    });
};
describe('CreateCode.vue', function () {
    it('input table has expeteced colums', function () {
        var wrapper = factory();
        var tableHeadRows = wrapper.findAll('table > thead > tr > th');
        var tableBodyRows = wrapper.findAll('table > tbody > tr');
        expect(tableHeadRows.at(0).text()).toBe('Paramenter');
        expect(tableHeadRows.at(1).text()).toBe('Value');
        expect(tableBodyRows.length).toBe(18);
    });
    it('output table does not exist', function () {
        var wrapper = factory();
        var tables = wrapper.findAll('table');
        expect(tables.length).toBe(1);
    });
    it('output table  exists', function () {
        var wrapper = factory({ response: {
                resultInfo: {
                    code: "sample"
                }
            } });
        var tables = wrapper.findAll('table');
        expect(wrapper.vm.$data.response.resultInfo.code).toBe("sample");
        expect(tables.at(1).exists()).toBe(true);
    });
    it('when triggers a click, response success ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = factory();
                    response = {
                        resultInfo: {
                            code: "string",
                            message: "string",
                            codeId: "string"
                        },
                        data: {
                            codeId: "string",
                            url: "string",
                            deeplink: "string",
                            expiryDate: 0,
                            merchantPaymentId: "string",
                            amount: {
                                amount: 0,
                                currency: "JPY"
                            },
                            orderDescription: "string",
                            orderItems: [
                                {
                                    name: "string",
                                    category: "string",
                                    quantity: 1,
                                    productId: "string",
                                    unit_price: {
                                        amount: 0,
                                        currency: "JPY"
                                    }
                                }
                            ],
                            codeType: "string",
                            storeInfo: "string",
                            storeId: "string",
                            terminalId: "string",
                            requestedAt: 0,
                            redirectUrl: "string",
                            redirectType: "WEB_LINK",
                            isAuthorization: false,
                            authorizationExpiry: 0
                        }
                    };
                    jest.spyOn(window, 'confirm').mockReturnValue(true);
                    jest.spyOn(window, 'open').mockReturnValue(null);
                    mockedAxios.post.mockResolvedValueOnce({ data: response });
                    return [4 /*yield*/, wrapper.find('button').trigger('click')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, flushPromises()];
                case 2:
                    _a.sent();
                    expect(wrapper.vm.$data.response).toEqual(response);
                    return [2 /*return*/];
            }
        });
    }); });
    it('when triggers a click, response failure ', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = factory();
                    response = {
                        resultInfo: {
                            code: "string",
                            message: "string",
                            codeId: "string"
                        },
                        data: {
                            codeId: "string",
                            url: "string",
                            deeplink: "string",
                            expiryDate: 0,
                            merchantPaymentId: "string",
                            amount: {
                                amount: 0,
                                currency: "JPY"
                            },
                            orderDescription: "string",
                            orderItems: [
                                {
                                    name: "string",
                                    category: "string",
                                    quantity: 1,
                                    productId: "string",
                                    unit_price: {
                                        amount: 0,
                                        currency: "JPY"
                                    }
                                }
                            ],
                            codeType: "string",
                            storeInfo: "string",
                            storeId: "string",
                            terminalId: "string",
                            requestedAt: 0,
                            redirectUrl: "string",
                            redirectType: "WEB_LINK",
                            isAuthorization: false,
                            authorizationExpiry: 0
                        }
                    };
                    mockedAxios.post.mockRejectedValueOnce({ response: { data: response } });
                    return [4 /*yield*/, wrapper.find('button').trigger('click')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, flushPromises()];
                case 2:
                    _a.sent();
                    expect(wrapper.vm.$data.response).toEqual(response);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=CreateCode.spec.js.map