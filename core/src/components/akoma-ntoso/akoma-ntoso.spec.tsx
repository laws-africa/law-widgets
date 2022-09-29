import { newSpecPage } from '@stencil/core/testing';

import { AkomaNtoso } from './akoma-ntoso';

interface IExtraAttributes {
  [key: string]: any;
}

const createComponentWithUri = (page: any, extraAttributes: IExtraAttributes = {}) => {
  const component = page.doc.createElement('la-akoma-ntoso');
  component.frbrExpressionUri = '/akn/ke/act/by-law/2009/dogs/eng@2010-02-03';
  Object.keys(extraAttributes).forEach((attr) => {
    component[attr] = extraAttributes[attr];
  });
  return component;
};
const createAknPage = async () => {
  return newSpecPage({
    components: [AkomaNtoso],
    html: '<div></div>',
  });
};

describe('la-akoma-ntoso', () => {
  it('builds', () => {
    expect(new AkomaNtoso()).toBeTruthy();
  });

  describe('with frbr-expression with frbr-expression-uri="/akn/ke/act/by-law/2009/dogs/eng@2010-02-03"', () => {
    it('should have attribute frbr-country equal to `ke`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrCountry).toBe('ke');
    });

    it('should have attribute frbr-type equal to `act`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrType).toBe('act');
    });
    it('should have attribute frbr-subtype equal to `by-law`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrSubtype).toBe('by-law');
    });

    it('should have no attribute frbr-author', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrAuthor).toBe(undefined);
    });

    it('should have attribute frbr-date to equal `2009`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrDate).toBe('2009');
    });
    it('should have attribute frbr-number to equal `dogs`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrNumber).toBe('dogs');
    });
    it('should have attribute frbr-expression-date to equal `2010-02-03`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrExpressionDate).toBe('2010-02-03');
    });

    it('should have attribute frbr-language to equal `eng`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page);
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrLanguage).toBe('eng');
    });
  });

  describe('single frbr attribute precedence over set frbr-expression-uri testing', () => {
    it('if frbr-language is `fr` and frbr-expression-uri is `/akn/../eng@..` frbr-language should be `fr`', async () => {
      const page = await createAknPage();
      const component = createComponentWithUri(page, {
        frbrLanguage: 'fr',
      });
      page.root?.appendChild(component);
      await page.waitForChanges();
      expect(page.rootInstance.frbrLanguage).toBe('fr');
    });
  });
});
