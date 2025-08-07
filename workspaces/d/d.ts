import { aNested } from '@bret/a/a-sub/index.js'
import { a } from '@bret/a/a.js'
import { b } from '@bret/b/b.js'


export const d = {
  a,
  aNested,
  b,
  c: 'c'
}

console.log({ d })
