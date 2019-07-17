export * from './key-executor';

import { Concat } from './concat';
import { Each } from './each';
import { Flatten } from './flatten';
import { KeyExecutor } from './key-executor';
import { Let } from './let';
import { Lets } from './lets';
import { Merge } from './merge';
import { Optional } from './optional';

/**
 * Array of executors for functions in templates.
 */
export const executors: KeyExecutor[] = [
  new Concat(),
  new Each(),
  new Flatten(),
  new Let(),
  new Lets(),
  new Merge(),
  new Optional(),
];
