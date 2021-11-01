## Leocode Recruitment Task

Not an usual starter app, because lately I've been trying out vite, cuz I was annyoyed with the time required to build an app while my engineering project started growing.

Vite works just fine, tho setting up tests with jest wasn't too easy, because it doesn't support it out of the box. Another issue I didn't yet resolve is the fact that tsconfig paths don't really work with sass files. Not a big issue, tho I have to write
```scss
@use '/src/styles/colors' as *;
```
instead of just
```scss
@use 'styles/colors' as *;
```

Important commands (tho I know it's all in package.json and anyone can look it up)

```bash
run:
    yarn dev

test: 
    yarn test

test with updating shapshots:
    yarn test -- -u
```

My tests may also not be the best, cuz it's my firt time really worrying about writing tests, which is kinda sad, but yeah..
Anyway I'm gonna learn how to be better at it, hope y'all can guide me a little!

Looking forward to get my code review.
