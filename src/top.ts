import { a } from '@bret/a'
import { aNested } from '@bret/a/a-sub/index.js'
import { b } from '@bret/b'
import { c } from '@bret/c'
import { d } from '@bret/d'

console.dir({
  a,
  b,
  c,
  aNested,
  d
}, { depth: 999 })
