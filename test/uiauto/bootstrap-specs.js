// transpile:mocha

import { instrumentsInstanceInit, globalInit, killAll } from './base';


describe('bootstrap', function () {
  describe('basic test bootstrap', function () {
    let ctx;
    before(async function () {
      await globalInit(this, {bootstrap: 'basic'});
      ctx = await instrumentsInstanceInit();
    });
    after(async () => {
      await killAll(ctx);
    });

    it('should start and execute one command', async () => {
      (await ctx.sendCommand("'123'")).should.equal('123');
      (await ctx.sendCommand('typeof $.lookup')).should.equal('undefined');
      (await ctx.sendCommand('typeof chai')).should.equal('object');
    });
  });

  describe('regular bootstrap without chai', function () {
    let ctx;
    before(async function () {
      await globalInit(this);
      ctx = await instrumentsInstanceInit();
    });
    after(async () => {
      if (ctx) {
        await killAll(ctx);
      }
    });

    it('should start and execute one command', async () => {
      (await ctx.sendCommand("'123'")).should.equal('123');
      (await ctx.sendCommand('typeof chai')).should.equal('undefined');
    });
  });

  describe("regular bootstrap with chai", function () {
    let ctx;
    before(async function () {
      await globalInit(this, {bootstrap: 'basic'});
      ctx = await instrumentsInstanceInit();
    });
    after(async () => {
      await killAll(ctx
        );
    });

    it('should start and execute one command', async () => {
      (await ctx.sendCommand("'123'")).should.equal('123');
      (await ctx.sendCommand('typeof chai')).should.equal('object');
    });
  });

});
