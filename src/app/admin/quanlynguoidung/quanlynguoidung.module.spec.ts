import { QuanlynguoidungModule } from './quanlynguoidung.module';

describe('QuanlynguoidungModule', () => {
  let quanlynguoidungModule: QuanlynguoidungModule;

  beforeEach(() => {
    quanlynguoidungModule = new QuanlynguoidungModule();
  });

  it('should create an instance', () => {
    expect(quanlynguoidungModule).toBeTruthy();
  });
});
