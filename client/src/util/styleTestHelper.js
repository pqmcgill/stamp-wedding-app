import { StyleSheetTestUtils } from 'aphrodite';

// needed to allow for mounting components in tests
// that rely on async style injection from aphrodite.
export default () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
};
