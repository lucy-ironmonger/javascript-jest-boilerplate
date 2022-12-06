import { helloWorld } from "../src";

describe('hello world', () => {
    it('when called', () => {
        const result = helloWorld()
        expect(result).toBe('hello world')
    })
})