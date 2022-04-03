# Vite External Dep Error

when using import maps, `vite` command throws an error like below even if `external` module added to both `rollupOption.external` and `optimizeDeps.exclude`.

```
[vite] Internal server error: Failed to resolve import "external" from "index.js". Does the file exist?
  Plugin: vite:import-analysis
  File: /Users/.../index.js
  1  |  import external from 'external';
     |                        ^
  2  |  
  3  |  external.func();
```

`vite build` command succesfully builds the `index.js` and I think `vite` command should work same as `vite build` if the `external` module is excluded.
