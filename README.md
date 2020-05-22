# Daro Server

[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/wa9ace.net/deno/pkg/daro/mod.ts)

Daro is a high performance router and web server for Deno using the optimal
routing tree data structure and access lookups by utilizing what is known as a
[Radix Trie](https://en.wikipedia.org/wiki/Radix_tree). Daro's development was
inspired by [Ruby's Roda](https://github.com/jeremyevans/roda) (hence Ro-da <>
Da-ro).

Daro can utilize all cores of a system as each request is handled by a
WebWorker. WebWorkers in Deno are backed by a
[tokio runtime threadpool](https://github.com/denoland/deno/blob/master/cli/tokio_util.rs#L3)
that produces real OS level threads that can run across all processing cores
allowing your application to use all available compute resources on the host.
You could think of this library as automatically handling the work that would go
in to manually clustering node servers using the
[Cluster](https://nodejs.org/api/cluster.html) library from Node's standard lib.

## Usage

```ts
import DaroServer from "https://wa9ace.net/deno/pkg/daro/v.0.0.1/mod.ts"

const server = new DaroServer(9001)

server.listen()
```

## Example Middleware

## Benchmarks

## Contributing
