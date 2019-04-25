export class AlertControllerMock<Opts, Overlay> {
  create(opts?: Opts): Promise<any> {
    return Promise.resolve({
      present: () => {
        return Promise.resolve();
      }
    });
  }

  dismiss(data?: any, role?: string, id?: string) {
    return Promise.resolve();
  }

  getTop(): Promise<Overlay> {
    return Promise.resolve(undefined);
  }
}
