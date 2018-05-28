import { QuanlydonhangModule } from './quanlydonhang.module';

describe('QuanlydonhangModule', () => {
  let quanlydonhangModule: QuanlydonhangModule;

  beforeEach(() => {
    quanlydonhangModule = new QuanlydonhangModule();
  });

  it('should create an instance', () => {
    expect(quanlydonhangModule).toBeTruthy();
  });
});
