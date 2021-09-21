const {stateAge, addUser, addColor} = require('./functions')

test('should return i am {age}', () => {
    expect(stateAge(25)).toEqual("I am 25")
})

test("should return user created status",() => {
    expect(addUser('Spencer', 21)).toEqual({name: 'Spencer',age:21})
    expect(addUser('Bruno', 15)).toEqual("User not old enough")
})

test("should add new color and return list of unique colors", () =>{
    expect(addColor('red')).toContain('red')
})