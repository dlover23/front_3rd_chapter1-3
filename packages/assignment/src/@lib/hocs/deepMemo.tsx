import { deepEquals } from "../equalities/index.ts";
import { ComponentType } from "react";
import { memo } from "./memo";

export function deepMemo<P extends object>(Component: ComponentType<P>) {
  return memo(Component, deepEquals);
}
