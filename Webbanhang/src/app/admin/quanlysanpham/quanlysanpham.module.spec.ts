import { QuanlysanphamModule } from './quanlysanpham.module';

describe('QuanlysanphamModule', () => {
  let quanlysanphamModule: QuanlysanphamModule;

  beforeEach(() => {
    quanlysanphamModule = new QuanlysanphamModule();
  });

  it('should create an instance', () => {
    expect(quanlysanphamModule).toBeTruthy();
  });
});
