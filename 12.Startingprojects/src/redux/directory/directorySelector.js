
import { createSelector } from "reselect";

const selectDirectory = state => state.directory 

export const selectDirectorySection = createSelector(
  [selectDirectory],
  directorry => directorry.sections
)