const Panels = require('panels');
const Button = require('panels/model/Button');
const Buttons = require('panels/model/Buttons');
const Panel = require('panels/model/Panel');

module.exports = {
  run() {
    describe('Button', () => {

      var obj;

      beforeEach(() => {
        obj = new Button();
      });

      afterEach(() => {
        obj = null;
      });

      it('Has buttons instance', () => {
        expect(obj.has('buttons')).toEqual(true);
      });

      it('Has no buttons', () => {
        expect(obj.get('buttons').length).toEqual(0);
      });

      it('Init with other buttons inside correctly', () => {
        obj = new Button({
          buttons: [{}]
        });
        expect(obj.get('buttons') instanceof Buttons).toEqual(true);
        expect(obj.get('buttons').length).toEqual(1);
      });

    });

    describe('Buttons', () => {
      var obj;

      beforeEach(() => {
        obj = new Buttons();
      });

      afterEach(() => {
        obj = null;
      });

      it('Deactivates buttons', () => {
        obj.add({ active: true });
        obj.deactivateAll();
        expect(obj.at(0).get('active')).toEqual(false);
      });

      it('Deactivates buttons with context', () => {
        obj.add({ active: true });
        obj.deactivateAll('someContext');
        expect(obj.at(0).get('active')).toEqual(true);
      });

      it('Deactivates except one', () => {
        var btn = obj.add({ active: true });
        obj.deactivateAllExceptOne();
        expect(obj.at(0).get('active')).toEqual(false);
      });

      it('Deactivates except one with model', () => {
        var btn = obj.add({ active: true });
        obj.deactivateAllExceptOne(btn);
        expect(obj.at(0).get('active')).toEqual(true);
      });

    });

    describe('Panel', () => {
      var obj;

      beforeEach(() => {
        obj = new Panel();
      });

      afterEach(() => {
        obj = null;
      });

      it('Has buttons instance', () => {
        expect(obj.has('buttons')).toEqual(true);
        expect(obj.get('buttons') instanceof Buttons).toEqual(true);
      });

      it('Has no buttons', () => {
        expect(obj.get('buttons').length).toEqual(0);
      });

      it('Init with buttons inside correctly', () => {
        obj = new Panel({
          buttons: [{}]
        });
        expect(obj.get('buttons') instanceof Buttons).toEqual(true);
        expect(obj.get('buttons').length).toEqual(1);
      });

    });

    describe('Panels', () => {
      var obj;

      beforeEach(() => {
        obj = new Panel();
      });

      afterEach(() => {
        obj = null;
      });

    });

  }
};
