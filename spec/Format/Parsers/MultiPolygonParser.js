/**
 * Created by PRadostev on 09.06.2015.
 */

describe("L.GML.MultiPolygonParser", function () {
    var parser;

    before(function () {
        parser = new L.GML.MultiPolygonParser();
    });

    it('should parse gml:MultiPolygon elements', function () {
        expect(parser.elementTag).to.equal('gml:MultiPolygon');
    });

    it('should know how to parse gml:Polygon', function () {
        var child = parser.parsers['gml:Polygon'];
        expect(child).to.be.instanceOf(L.GML.PolygonParser);
    });
});