export class NavControllerMock {
  navigate(): Promise<boolean> {
    return Promise.resolve(true);
  }

  navigateRoot(): Promise<boolean> {
    return Promise.resolve(true);
  }

  navigateForward(): Promise<boolean> {
    return Promise.resolve(true);
  }

  navigateBack(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
