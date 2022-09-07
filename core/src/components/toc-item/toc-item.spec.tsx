import { TocItem } from './toc-item';

describe('la-toc-item', () => {
  it('should trigger event `itemRendered` on componentDidRender', async () => {
    const component = new TocItem();
    component.itemRendered = { emit: jest.fn().mockReturnValue(Promise.resolve()) };
    component.componentDidRender();
    expect(component.itemRendered.emit).toHaveBeenCalled();
  });
});
