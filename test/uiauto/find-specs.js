/* globals $ */
'use strict';

var base = require('./base');

describe('find', function () {
  base.globalInit(this, { chai: true });

  describe("textfields", function () {
    /* globals rootPage: true */
    var ctx;
    base.instrumentsInstanceInit()
      .then(function (_ctx) { ctx = _ctx; }).done();

    afterEach(function () {
      return ctx.execFunc(
        function () {
          $('#UICatalog').first().tap();
          $.delay(1000);
        }
      );
    });

    it('should not return duplicate UIATextField', function () {
      return ctx.execFunc(
        function () {
          rootPage.clickMenuItem('Text Fields');
          $.delay(2000);
          var cell = $($('#Empty list').children('cell')).first()[0];
          var id = '' + $.getId(cell);
          var res = $.getElementsByType('UIATextField', id);
          return res;
        }
      ).then(function (res) {
        res.should.have.length(1);
      });
    });

    it('should not return duplicate UIASecureTextField', function () {
      return ctx.execFunc(
        function () {
          rootPage.clickMenuItem('Text Fields');
          $.delay(2000);
          var cell = $('#Empty list').children('cell')[2];
          var id = '' + $.getId(cell);
          var res = $.getElementsByType('UIASecureTextField', id);
          return res;
        }
      ).then(function (res) {
        res.should.have.length(1);
      });
    });

    it('getTree should not return duplicates', function () {
      return ctx.execFunc(
        function () {
          rootPage.clickMenuItem('Text Fields');
          $.delay(2000);
          var cell = $('#Empty list').children('cell')[0];
          return cell.getTree();
        }
      ).then(function (res) {
        if (process.env.VERBOSE) console.log('--->', res);
        res.type.should.equal('UIATableCell');
        res.children.length.should.equal(1);
        res.children[0].type.should.equal('UIATextField');
        res.children[0].children.length.should.equal(0);
        //res.should.have.length(1);
      });
    });

  });

});
