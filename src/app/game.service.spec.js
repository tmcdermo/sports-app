"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var game_service_1 = require("./game.service");
describe('GameService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(game_service_1.GameService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=game.service.spec.js.map