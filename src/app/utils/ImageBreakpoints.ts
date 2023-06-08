import {environment} from '../../environments/environment';

export type ImageBreakpoints = Record<Breakpoint, number>;

export enum Breakpoint {
  '2xl' = 1320,
  xl = 1140,
  lg = 960,
  md = 720,
  sm = 540,
  default = 0,
}

export const SIZES = [400, 700, 1200, 2050];

export const DEFAULT_BREAKPOINTS: ImageBreakpoints = {
  [Breakpoint.default]: 1,
  [Breakpoint.sm]: 1,
  [Breakpoint.md]: 1,
  [Breakpoint.lg]: 1,
  [Breakpoint.xl]: 1,
  [Breakpoint['2xl']]: 1,
};

export function computeImageFilename(filename: string, size: number) {
  return environment.url + 'images/' + size + '/' + filename;
}
