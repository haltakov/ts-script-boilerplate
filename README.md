# TS Script Boilerplate

A simple, modern and working way to create a script using TypeScript that use `import` and `export`.

## How it works?

Please use the following configuration in your project

### tsconfig.json

Take the tsconfig from [tsconfig.json](./tsconfig.json) which sets the `target` to `ES2020` and the `module` to `ESNext`.

### Dependencies

Install [`typescript`](https://www.npmjs.com/package/typescript) and [`tsx`](https://www.npmjs.com/package/tsx) as dev dependencies.

> Note: that `tsx` stands TypeScript Execute and is different from the `.tsx` file extension used in React.

### Script in `package.json`

Use `tsx` to configure your script in the [`package.json`](./package.json) file.

```json
{
  "scripts": {
    "sample": "tsx scripts/sample.ts"
  }
}
```

## How to run?

Run the script with your favorite package manager.

### Yarn

```bash
yarn sample
```

### NPM

```bash
npm run sample
```

## About

This was created by [Vladimir Haltakov](https://haltakov.net) out of frustration with the current state of TypeScript scripts.
