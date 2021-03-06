import { __awaiter, __generator } from "tslib";
import { shallowMount } from '@vue/test-utils';
import WebPayment from '@/views/WebPayment.vue';
import CreateCode from '@/components/CreateCode.vue';
import GetCodeDetails from '@/components/GetCodeDetails.vue';
import DeleteCode from '@/components/DeleteCode.vue';
import CancelPayment from '@/components/CancelPayment.vue';
describe('WebPayment.vue', function () {
    it('selected disabled option', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, options;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = shallowMount(WebPayment);
                    options = wrapper.find('select').findAll('option');
                    return [4 /*yield*/, options.at(0).setSelected()];
                case 1:
                    _a.sent();
                    expect(wrapper.find('option:checked').text()).toBe('Please select one api');
                    return [2 /*return*/];
            }
        });
    }); });
    it('selected Create a Code', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, options, createCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = shallowMount(WebPayment);
                    options = wrapper.find('select').findAll('option');
                    return [4 /*yield*/, options.at(1).setSelected()];
                case 1:
                    _a.sent();
                    createCode = wrapper.findComponent(CreateCode);
                    expect(wrapper.find('option:checked').text()).toBe('Create a Code');
                    expect(createCode.exists()).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('selected Get payment details', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, options, createCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = shallowMount(WebPayment);
                    options = wrapper.find('select').findAll('option');
                    return [4 /*yield*/, options.at(2).setSelected()];
                case 1:
                    _a.sent();
                    createCode = wrapper.findComponent(GetCodeDetails);
                    expect(wrapper.find('option:checked').text()).toBe('Get payment details');
                    expect(createCode.exists()).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('selected Delete a Code', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, options, deleteCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = shallowMount(WebPayment);
                    options = wrapper.find('select').findAll('option');
                    return [4 /*yield*/, options.at(3).setSelected()];
                case 1:
                    _a.sent();
                    deleteCode = wrapper.findComponent(DeleteCode);
                    expect(wrapper.find('option:checked').text()).toBe('Delete a Code');
                    expect(deleteCode.exists()).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('selected Cancel Payment', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper, options, deleteCode;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = shallowMount(WebPayment);
                    options = wrapper.find('select').findAll('option');
                    return [4 /*yield*/, options.at(4).setSelected()];
                case 1:
                    _a.sent();
                    deleteCode = wrapper.findComponent(CancelPayment);
                    expect(wrapper.find('option:checked').text()).toBe('Cancel Payment');
                    expect(deleteCode.exists()).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=WebPayment.spec.js.map