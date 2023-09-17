import { createSelector } from '@reduxjs/toolkit';

export const selectEvents = (state) => state.events.events;

export const selectFilter = state => state.filter;

export const selectVisibleEvents = createSelector(
  [selectEvents, selectFilter],
  (events, filters) => {
    const normalizedFilter = filters.toLowerCase();
    if (events === []) {
      return;
    }
    return events.filter(events =>
      events.title.toLowerCase().includes(normalizedFilter)
    ).reverse();
  }
);
