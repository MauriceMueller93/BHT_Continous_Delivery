import { insertFirst } from "../src/BussinessLogic/Application"

test("Test function add to index 0", () => {

    const array = [1, 2, 3]
    const value = 5

    const x = insertFirst(value, array)
    expect(x).toEqual([5,1,2,3])
})