import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as Store from 'store';
import { mockInitialState } from 'testMocks';

const mockStore = configureMockStore<Store.RootState>([thunk]);

export type MockStore = MockStoreEnhanced<Store.RootState, {}>;

export function setupMockStore(initialStateOverrides?: Partial<Store.RootState>) {
  const store = mockStore({ ...mockInitialState, ...initialStateOverrides });

  jest
    .spyOn(Store, 'useTypedDispatch')
    .mockImplementation(() => store.dispatch);

  jest
    .spyOn(Store, 'useTypedSelector')
    .mockImplementation((select) => select(store.getState()));

  return store;
}
