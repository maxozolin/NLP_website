const funcs = require('./functions')


test("addds 5+5 to equal 10", ()=>{
    expect(funcs.Add(5,5)).toBe(10)
})

test("Checks is asfasfasf is a website", () => {
    expect(funcs.isWebsite("asfasfasf")).toBe(false)
})