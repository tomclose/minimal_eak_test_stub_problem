## EAK api-stub testing problem

I've modified ember app-kit to add a `/post/xx` route, which pulls in the example data from the api-stubs.

Testing this route by visiting `/tests` shows all the tests passing.

Running `grunt test:server` at the command line shows the `post` test failing. The tests seem to fail when the request to `/post/1` returns a 302 (instead of returning the stub data provided in `api-stub/routes.js`).

**What am I doing wrong?**