/**
 * Created by PRadostev on 09.06.2015.
 */

describe("L.GML.MultiCurveParser", function () {
    var parser;

    before(function () {
        parser = new L.GML.MultiCurveParser();
    });

    it('should parse gml:MultiCurve element', function () {
        expect(parser.elementTag).to.equal('gml:MultiCurve');
    });

    it('should know how parse gml:LineStrings', function () {
        var child = parser.parsers['gml:LineString'];
        expect(child).to.be.instanceOf(L.GML.LineStringParser);
    });
});