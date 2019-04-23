# About this project
This is a quick application to demonstrate how the dynamic ngrx library can be used.
A few things to note about this application. It is using the entire NGRX library.
Effects, actions, selectors, reducers, entities, store, logger, you name it. The thing to note
is how _little_ code there is to get it all working. The biggest pain I've had with NGRX
has been the incredible amount of boilerplate you ahve to write to get it working.

Well, this application shows how little code it can be done in. Currently, it only works
with local storage and in memory data, but the next release will demonstrate how to connect
it up with an API. The goal again will be to keep the boilerplate to as little as possible.

The two places to look in this project are `app.module.ts` and `app.component.ts`. These two
files show where the Dynamic NGRX library are functional. In `app.module.ts`, the entities are
defined. To start with, you just have to pass in a collection of entities, that's all! The
Dynamic NGRX library takes care of the rest. Then, when you want to access your data,
you call the `DynamicFacadeService`. Pass in the interface for your entity, and the entity name
as you defined it in the module import.

The `DynamicFacadeService` will return a facade through which all your key methods can be accessed.
You have access to all the basic NGRX Entity methods, and there's an `action` method via which
all the basic NGRX Entity Adapter methods are available (i.e. `addOne`, `removeMany`, etc.);

# Quickstart
- `npm i`
- `ng serve`