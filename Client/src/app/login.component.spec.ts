import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  it('should create form', () => {
    const component = new LoginComponent({} as any, {} as any);
    expect(component.form).toBeTruthy();
  });
});
