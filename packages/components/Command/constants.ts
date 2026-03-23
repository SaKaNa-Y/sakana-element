import type { InjectionKey } from 'vue';
import type { CommandContext } from './types';

export const COMMAND_CTX_KEY: InjectionKey<CommandContext> = Symbol('commandContext');
export const COMMAND_GROUP_KEY: InjectionKey<string> = Symbol('commandGroupId');
